import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    public userService: UsersService,
    public authService: AuthService
  ) {}
  dialogRef = this.dialog;

  openDialog() {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result: ${result}');
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.data.id).subscribe({
      next: (data) => {
        console.log(data);
        this.dialog.closeAll();
      },
      error: (error: HttpErrorResponse) => {
        if (error.statusText == 'Internal Server Error' || error.status > 200) {
          alert('There was an deleting the user');
        } else {
          alert('User created successfully');
          this.dialog.closeAll();
        }
      },
    });
  }
  ngOnInit(): void {}
}
