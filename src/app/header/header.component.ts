import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 claims: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userClaims();
  }

  logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  userClaims(){
    this.userService.userClaims().subscribe((data) => {
      this.claims = data;
    })
  }
}
