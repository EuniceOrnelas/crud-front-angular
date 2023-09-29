import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  host = 'http://localhost:3000/api';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(`${this.host}/employee`).pipe(map((res) => res));
  }

  addEmployee(employee: string) {
    return this.http.post(`${this.host}/employee`, {
      name: employee,
      complated: false,
    });
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.host}/employee/${id}`);
  }
}
