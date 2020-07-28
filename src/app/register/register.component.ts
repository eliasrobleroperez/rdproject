import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { CrudService } from '../service/crud.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: CrudService, private router: Router) { }

  ngOnInit(): void {
  }

  async onRegister() {
    const { email, password } = this.form.value;
    try {
      const user = await this.authService.register(email, password);
      if (user) {
        this.router.navigate(['/visualizar']);
        window.alert("Registro exitoso");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
