import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { VisualizarUbicacionMapaComponent } from './visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component';
import { ColocarMarcadoresComponent } from './colocar-marcadores/colocar-marcadores.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { MapaComponent } from './mapa/mapa.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {PermisoVerGuard} from './guards/permiso-ver.guard';

const routes: Routes =[
  {path: '', redirectTo: '/visualizar', pathMatch: 'full'},
  {path: 'visualizar', component: VisualizarUbicacionMapaComponent, canActivate: [PermisoVerGuard]},
  {path: 'insertar', component: ColocarMarcadoresComponent, canActivate: [PermisoVerGuard]},
  {path: 'datosAlmacenados', component: AnalisisComponent, canActivate: [PermisoVerGuard]},
  {path: 'mapa/:latitud/:longitud', component: MapaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
