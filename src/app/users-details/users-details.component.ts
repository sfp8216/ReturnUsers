import { Component, OnInit, Input } from '@angular/core';
import { User } from '../users/User';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css'],
})
export class UsersDetailsComponent implements OnInit {
  @Input() hero!: User;
  @Input('master') masterName = ''; // tslint:disable-line: no-input-rename
  constructor() {}

  ngOnInit(): void {}
}
