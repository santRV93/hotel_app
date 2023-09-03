import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private alertSertvice: AlertService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.loginForm.valid) {
      const bodyLogin = {
        email: this.loginForm.get('email')?.value ?? '',
        password: this.loginForm.get('password')?.value ?? '',
      };
      this.authService.authenticateUser(bodyLogin).subscribe({
        next: (res: any) => {
          this.authService.storeSession(bodyLogin.email);
          this.alertSertvice.showAlert({
            severity: 'success',
            summary: 'Success',
            detail: 'Prueba'
          });
        },
        error: (err) => {
          this.alertSertvice.showAlert({
            severity: 'error',
            summary: 'Error',
            detail: 'Ha ocurrido un error'
          });
        }
      })
    } else {
      this.alertSertvice.showAlert({
        severity: 'warn',
        summary: 'Atención',
        detail: 'Llena los datos correctamente'
      });
    }
  }

}
