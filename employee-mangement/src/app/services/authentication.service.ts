import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  authenticate(username, password) {
    console.log('into authenticate method');
    const headers = new HttpHeaders({ 'Authorization': 'Basic ' + btoa(username + ':' + password) });
    console.log(btoa(username + ':' + password));
    return this.httpClient.get<User>('http://localhost:8080/api/validateLogin',{headers}).pipe(
     map(
       user => {
        console.log('username');
        sessionStorage.setItem('username',username);
        return user;
       }
     )
    );
  }

  isUserLoggedIn() {
    let loggedInUser = sessionStorage.getItem('username')
    console.log(!(loggedInUser === null))
    return !(loggedInUser === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
