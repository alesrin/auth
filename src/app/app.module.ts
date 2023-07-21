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

export const firebaseConfig = {

  apiKey: "AIzaSyAXtu8rZUFna2fhw5Jsb9d2WQQIvpkbVvE",
  authDomain: "ejercicio-firebase-94254.firebaseapp.com",
  projectId: "ejercicio-firebase-94254",
  storageBucket: "ejercicio-firebase-94254.appspot.com",
  messagingSenderId: "294867356098",
  appId: "1:294867356098:web:f13642050d2ef329802e5b"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AngularFireAuthModule,
    FormsModule, ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
