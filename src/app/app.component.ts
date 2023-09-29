import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

interface Employee {
  id: number;
  name: string;
  complated: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employees: Employee[];
  employee: string;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private employeeService: EmployeeService,
  ) {
    this.employees = [];
    this.employee = '';
  }

  title = 'employee-ui';

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data) => {
      console.log(data);
      this.employees = data as Employee[];
    });
  }
  
  addEmployee(employee: string) {
    this.employeeService.addEmployee(employee).subscribe();
    this.employee ='';
  }


  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
    });
  }
}
