import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/users/User';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css'],
})
export class UpdateDialogComponent implements OnInit {
  userId: User;
  public updateFormGroup: FormGroup;
  constructor(
    public dialog: MatDialog,
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    private http: HttpClient,
    public userService: UsersService
  ) {
    this.updateFormGroup = this.formBuilder.group({
      firstName: [],
      lastName: [],
      middleInitial: [],
      dob: [],
      subscriberID: [],
      groupID: [],
      addressLine1: [],
      addressLine2: [],
      city: [],
      state: [],
      postalCode: [],
      homePhone: [],
      cellPhone: [],
      email: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.userId = JSON.parse(JSON.stringify(this.data['element']));

    this.updateFormGroup = this.formBuilder.group({
      firstName: [this.userId.firstName],
      lastName: [this.userId.lastName],
      middleInitial: [this.userId.middleInitial],
      dob: [this.userId.dob],
      subscriberID: [this.userId.subscriberID],
      groupID: [this.userId.groupID],
      addressLine1: [this.userId.addressLine1],
      addressLine2: [this.userId.addressLine2],
      city: [this.userId.city],
      state: [this.userId.state],
      postalCode: [this.userId.postalCode],
      homePhone: [this.userId.homePhone],
      cellPhone: [this.userId.cellPhone],
      email: [this.userId.email],
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(UpdateDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  submit() {
    let formObj = this.updateFormGroup.getRawValue();

    let user: User = JSON.parse(JSON.stringify(formObj));
    user.id = this.userId.id;

    this.userService.updateUser(user).subscribe({
      next: (data) => {
        alert('User Updated successfully');
        this.updateFormGroup.reset();
        this.dialog.closeAll();
      },
      error: (error: HttpErrorResponse) => {
        if (error.statusText == 'Internal Server Error' || error.status > 200) {
          console.log(error);
          // alert('There was an error creating a new user');
        } else {
          alert('User Updated successfully');
          this.updateFormGroup.reset();
          this.dialog.closeAll();
        }
      },
    });
  }
}
