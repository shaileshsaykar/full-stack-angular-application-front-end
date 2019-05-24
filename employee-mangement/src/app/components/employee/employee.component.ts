import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/model/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees : Employee [];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe((response) => {
      this.employees = response;
      console.log(this.employees);
    })
    }

    deleteEmployee(employee: Employee): void {
      this.employeeService.deleteEmployee(employee.id)
        .subscribe( data => {
          this.employees = this.employees.filter(u => u !== employee);
        })
    };
}
