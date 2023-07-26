import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { NuevoLugarComponent } from './nuevo-lugar/nuevo-lugar.component';
import { ListaLugarComponent } from './lista-lugar/lista-lugar.component';

const routes: Routes = [
   { path:'', redirectTo:"nuevo-lugar",pathMatch:"full"},
   { path:'bienvenido', component : BienvenidoComponent },
   { path:'login', component : LoginComponent }, 
   { path:'nuevo-lugar', component : NuevoLugarComponent },
   { path:'lista-lugar', component : ListaLugarComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
