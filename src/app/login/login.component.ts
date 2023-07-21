import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  usuario= this.fb.group({
    
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,
    Validators.minLength(4)]],
    })
  constructor(private fb: FormBuilder,
    private auth: AuthService, private router: Router
    ) { }

  ngOnInit() {
  }

  login(){
    this.auth.loginUser(this.usuario.value.email, this.usuario.value.password).then( _result => {
      this.router.navigate(['/bienvenido']);
    }).catch(err=>{
     window.alert('Error' + err.message)
    })
    }

    signin(){
      this.auth.registerUser(this.usuario.value.email, this.usuario.value.password).then( _result => {
        this.router.navigate(['/bienvenido']);
      }).catch(err=>{
       window.alert('Error' + err.message)
      })}
}
