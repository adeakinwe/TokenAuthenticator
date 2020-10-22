import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
departments: any[];

modalTitle:string;
dep:any;
addEditDept:boolean = false;

deptIdFilter:string='';
deptNameFilter:string='';
deptListNoFilter:any=[];
  constructor(private ss: SharedService) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:''
    }
    this.modalTitle = "Add Department";
    this.addEditDept = true;
  }

  editClick(item: any){
    this.dep = item;
    this.modalTitle = "Edit Department";
    this.addEditDept = true;
  }

  deleteClick(item){
    if(confirm("Do you want to delete department?")){
      this.ss.deleteDept(item.DepartmentId).subscribe((res)=>{
        alert(res.toString());
      })
      this.getDepartments();
    }
  }

  closeClick(){
    this.addEditDept = false;
    this.getDepartments();
  }

  getDepartments(){
    this.ss.getAllDept().subscribe( (dep) => {
      this.departments = dep;
      this.deptListNoFilter = dep;
    })
  }

  filterDept(){
    var DeptIdFilter = this.deptIdFilter;
    var DeptNameFilter = this.deptNameFilter;

    this.departments = this.deptListNoFilter.filter((fl) =>{
      return fl.DepartmentId.toString().toLowerCase().includes(
        DeptIdFilter.toString().trim().toLowerCase()
      ) &&
      fl.DepartmentName.toString().toLowerCase().includes(
        DeptNameFilter.toString().trim().toLowerCase()
        )
    })
  }

  sortDept(prop,asc){
    this.departments = this.deptListNoFilter.sort((a,b)=>{
      if(asc){
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else{
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }
}
