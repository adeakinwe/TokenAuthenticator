import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
readonly apiUrl = "http://localhost:65438/";

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.http.post(`${this.apiUrl}/api/user/register`, body)
  }

  userAuth(userName, password){
    var data = `username=${userName}&password=${password}&grant_type=password`;
    var reqHeader = new HttpHeaders({'Content-type':'application/x-www-urlencoded'});
    return this.http.post(this.apiUrl+'token', data, {headers:reqHeader});
  }

  userClaims(){
    const header = {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+localStorage.getItem('userToken'),
      }),
    };
    return this.http.get(`${this.apiUrl}api/getuserclaims`, header);
  }
}

