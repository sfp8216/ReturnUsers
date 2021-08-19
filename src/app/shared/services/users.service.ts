import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl = 'https://returnusers.azurewebsites.net/api/';
  constructor(private http: HttpClient) {}

  createUser(model: any) {
    return this.http.post<any>(this.usersUrl + 'CreateUser', model);
  }

  getAllusers() {
    return this.http.get(this.usersUrl + 'ReturnUsers');
  }
  searchUser(model: any) {
    return this.http.get(this.usersUrl + 'SearchUsers?SearchTerm=' + model);
  }
  deleteUser(model: any) {
    return this.http.delete(this.usersUrl + 'DeleteUser?id=' + model);
  }
  updateUser(model: any) {
    return this.http.put<any>(this.usersUrl + 'UpdateUser', model);
  }
}
