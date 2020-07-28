import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth'

//service
import {CrudService} from './service/crud.service';

//Leaflet
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

//Pubnub
import {PubNubAngular} from 'pubnub-angular2'; 

import { AppComponent } from './app.component';
import { VisualizarUbicacionMapaComponent } from './visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component';
import { AppRoutingModule } from './app-routing.module';
import { ColocarMarcadoresComponent } from './colocar-marcadores/colocar-marcadores.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { MapaComponent } from './mapa/mapa.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PermisoVerGuard } from './guards/permiso-ver.guard';


@NgModule({
  declarations: [
    AppComponent,
    VisualizarUbicacionMapaComponent,
    ColocarMarcadoresComponent,
    AnalisisComponent,
    MapaComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    LeafletModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [CrudService,PubNubAngular, PermisoVerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
