import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  employees: any[];

  modalTitle:string;
  emp:any;
  addEditEmp:boolean = false;

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
}
