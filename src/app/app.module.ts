import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { NuevoLugarComponent } from './nuevo-lugar/nuevo-lugar.component';
import { ListaLugarComponent } from './lista-lugar/lista-lugar.component';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';

export const firebaseConfig = {

  apiKey: "AIzaSyDJys2WnpQMWLDsZHzaUc8lLtHcTr6IIW4",

  authDomain: "crudservidor27.firebaseapp.com",

  projectId: "crudservidor27",

  storageBucket: "crudservidor27.appspot.com",

  messagingSenderId: "978767951966",

  appId: "1:978767951966:web:37671cffc5b3569ed31ccf"

};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    NuevoLugarComponent,
    ListaLugarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule
    , provideFirestore(() => getFirestore()),
    AngularFirestoreModule, AngularFireAuthModule,
    FormsModule, ReactiveFormsModule,
    provideFirebaseApp( () => initializeApp(firebaseConfig))
    
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: firebaseConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
