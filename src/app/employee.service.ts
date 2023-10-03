import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // URL base del servidor de la API
  private host = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de empleados desde el servidor.
   * @returns Un observable que emite la lista de empleados.
   */
  getEmployees() {
    // Realiza una solicitud GET al servidor y mapea la respuesta a formato JSON.
    return this.http.get(`${this.host}/employee`).pipe(map((res) => res));
  }

  /**
   * Agrega un nuevo empleado al servidor.
   * @param employee El nombre del empleado a agregar.
   * @returns Un observable que emite la respuesta del servidor.
   */
  addEmployee(employee: string) {
    // Realiza una solicitud POST al servidor con los datos del nuevo empleado.
    return this.http.post(`${this.host}/employee`, {
      name: employee,
      completed: false,
    });
  }

  /**
   * Elimina un empleado del servidor por su ID.
   * @param id El ID del empleado a eliminar.
   * @returns Un observable que emite la respuesta del servidor.
   */
  deleteEmployee(id: number) {
    // Realiza una solicitud DELETE al servidor para eliminar al empleado por su ID.
    return this.http.delete(`${this.host}/employee/${id}`);
  }
}
