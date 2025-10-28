import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface LoginModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  model: LoginModel = { email: '', password: '' };
  hidePassword = true;

  constructor() { }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }
  
  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Datos enviados:', this.model);
    // Aquí implementas la lógica de autenticación
    // Ejemplo: si éxito → redirigir a home
    // this.router.navigate(['/']);
  }

}