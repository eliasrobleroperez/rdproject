import { Component, OnInit } from '@angular/core';
import {CrudService} from '../service/crud.service';
import {Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user$: Observable<any> = this.authService.afsAuth.user;

  constructor(private authService: CrudService, private router:Router) { }

  ngOnInit() {
  
  }

  async onLogOut(){
    try{
      await this.authService.logOut();
      this.router.navigate(['/login']);
    }catch(error){
      console.log(error);
    }
  }

}
