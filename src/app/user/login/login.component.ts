import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  loginError: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  login(userName,password){
    this.userService.userAuth(userName,password).subscribe((data:any)=>{
    localStorage.setItem('userToken', data.access_token);
    this.router.navigate(['/employee'])
    },
    (err: HttpErrorResponse) => {
      !this.loginError;
    })
  }
}
