import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl : string = 'http://localhost:8080/api';
  
  constructor(private httpClient : HttpClient) { }
  getEmployee(){
    console.log('into get employee method');
    let username='javainuse';
    let password='password';  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Employee[]>(this.baseUrl+"/employees",{headers});
  }
  deleteEmployee(empId : number){
    console.log('into the delete employee method');
    let username='javainuse';
    let password='password';  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Employee>(this.baseUrl+"/employee/"+empId,{headers});
  }
  createEmployee(emp : Employee){
    console.log('into the create employee method');
    let username='javainuse';
    let password='password';  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Employee>(this.baseUrl+"/employee",emp,{headers});
  }
}
