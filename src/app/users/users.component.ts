import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http:HttpClient) { }
  values:any;

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    return this.http.get("https://returnusers.azurewebsites.net/api/ReturnUsers").subscribe(response => {
      console.log(response);
      this.values = response;
    },
    err => {
      console.log(err);
    })
  }

}
