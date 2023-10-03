import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

// Define una interfaz para representar la estructura de un objeto Employee.
interface Employee {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Propiedades del componente
  employees: Employee[]; // Almacena la lista de empleados recuperada del servicio.
  employee: string; // Almacena el nombre del nuevo empleado a agregar.

  constructor(private employeeService: EmployeeService) {
    // Inicialización de propiedades
    this.employees = [];
    this.employee = '';
  }

  // Título de la aplicación
  title = 'employee-ui';

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit() {
    // Suscribe al servicio para obtener la lista de empleados y la asigna a la propiedad employees.
    this.employeeService.getEmployees().subscribe((data) => {
      console.log(data);
      this.employees = data as Employee[];
    });
  }
  
  // Método para agregar un empleado
  addEmployee(employee: string) {
    // Llama al servicio para agregar un empleado y se suscribe a la respuesta.
    this.employeeService.addEmployee(employee).subscribe();
    // Limpia el campo de entrada del nombre del empleado después de agregarlo.
    this.employee ='';
  }

  // Método para eliminar un empleado
  deleteEmployee(id: number) {
    // Llama al servicio para eliminar un empleado por su ID y se suscribe a la respuesta.
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
    });
  }
}
