import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {
@Input() dep: any;
DepartmentId: number;
DepartmentName:string;
  constructor(private ss:SharedService) { }

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDept(){
    var val = {DepartmentId:this.DepartmentId,
               DepartmentName:this.DepartmentName};
    this.ss.addDept(val).subscribe((res)=>{
      alert(res.toString());
    })
  }

  updateDept(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};
this.ss.updateDept(val).subscribe((res)=>{
alert(res.toString());
})
  }
}
