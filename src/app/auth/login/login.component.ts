import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { LoginViewmodelService } from '../../viewModels/login-viewmodel.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = ""
  password: string = ""
  mensaje: string | null = null
  constructor(private loginViewmodel: LoginViewmodelService,
    private router: Router) {

  }
  onLogin() {
    this.loginViewmodel.login(this.usuario, this.password).subscribe({
      next: (response) => {
        console.log(response);

      },
      error: (error) => {
       this.mensaje = "Ocurrió un error al ingresar"
       
      }
    })
  }

}
