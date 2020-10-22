import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly apiUrl = "http://localhost:65438/api/";
readonly photoUrl = "http://localhost:65438/photos/"

  constructor(private http: HttpClient) { }

  //API methods for department
  getAllDept(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'department')
  }

  addDept(dep: any){
    return this.http.post(this.apiUrl + 'department',dep)
  }

  updateDept(dep: any){
    return this.http.put(this.apiUrl + 'department',dep)
  }

  deleteDept(dep: any){
    return this.http.delete(this.apiUrl + 'department/'+dep)
  }

  //API methods for employee
  getAllEmp(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'employee')
  }

  addEmp(emp: any){
    return this.http.post(this.apiUrl + 'employee',emp)
  }

  updateEmp(emp: any){
    return this.http.put(this.apiUrl + 'employee',emp)
  }

  deleteEmp(emp: any){
    return this.http.delete(this.apiUrl + 'employee/'+emp)
  }

  getAllDeptNames(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'employee/getalldepartment')
  }

  uploadPhotos(photo: any){
    return this.http.post(this.apiUrl + 'employee/savefile', photo)
  }
}

