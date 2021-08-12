import { Component, OnInit, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './User';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http:HttpClient) { }
  users:Array<User>;

  ngOnInit(): void {
    this.loadUsers();
  }


  loadUsers(){
    return this.http.get("https://returnusers.azurewebsites.net/api/ReturnUsers").subscribe(response => {
      console.log(response);
      this.users = <Array<User>>response;
      console.log(this.users.length);
    },
    err => {
      console.log(err);
    })
  }
}


function search(text: string, pipe: PipeTransform): User[] {
  return this.users.filter(newUser => {
    const term = text.toLowerCase();
    return newUser.firstName.toLowerCase().includes(term)
        || pipe.transform(newUser.lastName).includes(term)
        || pipe.transform(newUser.subscriberID).includes(term);
  });
}

@Component({
  selector: 'ngbd-table-filtering',
  templateUrl: './users.component.html' ,
  providers: [DecimalPipe]
})
export class NgbdTableFiltering {
  countries$: Observable<User[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }
}
