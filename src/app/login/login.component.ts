import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: CrudService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin() {
    const { email, password } = this.form.value;
    try {
      const user = await this.authService.loginUserEmail(email, password);
      if (user) {
        this.router.navigate(['./visualizar']);
      }
    } catch (error) {
      window.alert("Correo o contraseña inválidos")
      console.log(error)
    }

  }
}
