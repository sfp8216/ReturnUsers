import {
  Component,
  OnDestroy,
  OnInit,
  PipeTransform,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class UsersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<User>();
  columnsToDisplay: string[] = ['name', 'subscriberid', 'groupid'];
  expandedElement: User | null;
  searchTerm: string;
  resetVisible = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadUsers() {
    this.http
      .get('https://returnusers.azurewebsites.net/api/ReturnUsers')
      .subscribe(
        (data: User[]) => {
          console.log(data);
          this.dataSource.data = data;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  search() {
    console.log(this.searchTerm);
    const filterValue = this.searchTerm;
    this.http
      .get(
        'https://returnusers.azurewebsites.net/api/SearchUsers?SearchTerm=' +
          filterValue
      )
      .subscribe(
        (data: User[]) => {
          console.log(data);
          this.dataSource.data = data;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
