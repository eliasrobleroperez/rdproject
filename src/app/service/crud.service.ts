import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { VirtualTimeScheduler, from, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public userData$: Observable<firebase.User>;
  constructor(public afsAuth: AngularFireAuth, public fireservice: AngularFirestore) {
    this.userData$ = afsAuth.authState;
  }

  crearNuevaMarcador(Marcador) {
    return this.fireservice.collection('MarcadorDistancia').add(Marcador);
  }

  get_Marcador() {
    return this.fireservice.collection('MarcadorDistancia').snapshotChanges();
  }

  eliminarMarcador(idMarcador) {
    this.fireservice.doc('MarcadorDistancia/' + idMarcador).delete();
  }

  crearUbicacionFueraLimite(ubicacion) {
    return this.fireservice.collection('ubicacion').add(ubicacion);
  }


  get_Ubicaciones() {
    return this.fireservice.collection('ubicacion').snapshotChanges();
  }

  async loginUserEmail(email: string, password: string) {
    const res = await this.afsAuth.signInWithEmailAndPassword
      (email, password);
    return res;
  }

  async register(email: string, password: string) {
    try {
      const res = await this.afsAuth.createUserWithEmailAndPassword
        (email, password);
      return res;
    } catch (error) {
      window.alert("Error, verifique los datos. La contraseña debe ser al menos de 6 caracteres");
      console.log(error);
    }
  }

  async logOut() {
    await this.afsAuth.signOut();
  }

}
