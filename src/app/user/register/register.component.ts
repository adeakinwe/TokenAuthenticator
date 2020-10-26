import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  validateEmail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm){
    if(form != null)
    form.reset();
    this.user = {
      FirstName:'',
      LastName:'',
      Email:'',
      UserName:'',
      Password:''
    }
  }

  register(form: NgForm) {
this.userService.registerUser(form.value).subscribe((data:any)=>{
  if(data.Succeeded == true){
    this.resetForm(form);
  }
})
  }

}
