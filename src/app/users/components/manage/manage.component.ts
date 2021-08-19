import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/users/User';
import { DeleteDialogComponent } from '../shared/delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from '../shared/update-dialog/update-dialog.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
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
export class ManageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<User>();
  columnsToDisplay: string[] = [
    'name',
    'subscriberid',
    'groupid',
    'show-details',
    'interaction',
  ];
  expandedElement: User | null;
  searchTerm: string;
  resetVisible = false;
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    public userService: UsersService
  ) {}
  status = true; // or minus if you want that first

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

  deleteUser(id: string) {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '200px',
      width: '400px',
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.loadUsers();
    });
  }
  updateUser(element: any) {
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: { element },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadUsers();
    });
  }

  loadUsers() {
    this.userService.getAllusers().subscribe(
      (data: User[]) => {
        data;
        this.dataSource.data = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  search() {
    const filterValue = this.searchTerm;
    this.userService.searchUser(filterValue).subscribe(
      (data: User[]) => {
        this.dataSource.data = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
