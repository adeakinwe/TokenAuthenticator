import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  employees: any[];
  claims: any;

  modalTitle:string;
  emp:any;
  addEditEmp:boolean = false;

  empIdFilter:string='';
  empNameFilter:string='';
  empDeptFilter:string='';
  empDateFilter:string='';
  empListNoFilter:any=[];

    constructor(private ss: SharedService) { }

    ngOnInit(): void {
      this.getEmployees();
    }

    addClick(){
      this.emp={
        EmployeeId:0,
        EmployeeName:'',
        Department:'',
        DateOfJoining:'',
        PhotoFileName:'anonymous.jpg'
      }
      this.modalTitle = "Add Employee";
      this.addEditEmp = true;
    }

    editClick(item: any){
      this.emp = item;
      this.modalTitle = "Edit Employee";
      this.addEditEmp = true;
    }

    deleteClick(item){
      if(confirm("Do you want to delete employee?")){
        this.ss.deleteEmp(item.EmployeeId).subscribe((res)=>{
          alert(res.toString());
        })
        this.getEmployees();
      }
    }

    closeClick(){
      this.addEditEmp = false;
      this.getEmployees();
    }

    getEmployees(){
      this.ss.getAllEmp().subscribe( (emp) => {
        this.employees = emp;
      })
    }

    filterEmp(){
      var EmpIdFilter = this.empIdFilter;
      var EmpNameFilter = this.empNameFilter;
      var EmpDeptFilter = this.empDeptFilter;
      var EmpDateFilter = this.empDateFilter;

      this.employees = this.empListNoFilter.filter((fl) =>{
        return fl.EmployeeId.toString().toLowerCase().includes(
          EmpIdFilter.toString().trim().toLowerCase()
        ) &&
        fl.EmployeeName.toString().toLowerCase().includes(
          EmpNameFilter.toString().trim().toLowerCase()
          )
          &&
          fl.Department.toString().toLowerCase().includes(
            EmpDeptFilter.toString().trim().toLowerCase()
            )
            &&fl.DateOfJoining.toString().toLowerCase().includes(
              EmpDateFilter.toString().trim().toLowerCase()
              )
      })
    }

    sortEmp(prop,asc){
      this.employees = this.empListNoFilter.sort((a,b)=>{
        if(asc){
          return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        }
        else{
          return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
      })
    }
}
