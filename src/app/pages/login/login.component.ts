import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule,IonicModule,ButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


loginForm:FormGroup;

constructor(private fb:FormBuilder){

  this.loginForm=this.fb.group({
    username: new FormControl(""),
    password: new FormControl("")
  })
}

onLogin(){
  
}
}
