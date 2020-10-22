import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
@Input() emp: any;
EmployeeId: number;
EmployeeName:string;
Department:string;
DateOfJoining:string;
PhotoFilePath:string;
PhotoFileName:string;

DepartmentList: any[];

  constructor(private ss:SharedService) { }

  ngOnInit(): void {
    this.getDepartmentList();
  }

  getDepartmentList(){
    this.ss.getAllDeptNames().subscribe((data)=>{
      this.DepartmentList = data;

    this.EmployeeId = this.emp.EmployeeId;
    this.EmployeeName = this.emp.EmployeeName;
    this.Department = this.emp.Department;
    this.DateOfJoining = this.emp.DateOfJoining;
    this.PhotoFilePath = this.ss.photoUrl+this.PhotoFileName;
    })
  }

  addEmp(){
    var val = {EmployeeId:this.EmployeeId,
               EmployeeName:this.EmployeeName,
               Department:this.Department,
               DateOfJoining:this.DateOfJoining,
               PhotoFileName:this.PhotoFileName};
    this.ss.addEmp(val).subscribe((res)=>{
      alert(res.toString());
    })
  }

  updateEmp(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName};
this.ss.updateEmp(val).subscribe((res)=>{
alert(res.toString());
})
  }

  uploadPhoto(e){
    var file = e.target.files[0];
    const formData:FormData = new FormData();
    formData.append('UploadedFile',file,file.name);

    this.ss.uploadPhotos(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.ss.photoUrl+this.PhotoFileName;
    })
  }
}
