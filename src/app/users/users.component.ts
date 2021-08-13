import { Component, OnDestroy, OnInit, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './User';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  users: User[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType:'full_numbers',
      pageLength:15,
      lengthMenu:[20,40,50]
    };
    this.loadUsers();

    //load stuff?
    $('#usersTable tbody').on('click','td.details-control', function(){
      var tr = $(this).closest('tr');
      var row = $('#usersTable').DataTable().row(tr);

      if(row.child.isShown()){
        row.child.hide();
        tr.removeClass('shown');
      }else{




        console.log("false");
        row.child(
          '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Full name:</td>'+
            "<td>{{user.firstName}}</td>"+
        '</tr>'+
        '<tr>'+
            '<td>Extension number:</td>'+
            "<td>{{user.firstName}}</td>"+
        '</tr>'+
        '<tr>'+
            '<td>Extra info:</td>'+
            '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
    '</table>'
        ).show();
          tr.addClass('shown');
      }
    })
  }

  showDetails(){
  return "hi";
  }

  loadUsers(){
     this.http.get("https://returnusers.azurewebsites.net/api/ReturnUsers").subscribe(response => {
      console.log(response);
      this.users = (response as any);
      this.dtTrigger.next();
    },
    err => {
      console.log(err);
    })
  }

  format ( user:User )  : string{
    return
}
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
