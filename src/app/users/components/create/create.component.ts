import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/shared/services/users.service';
import { SnackBarComponent } from '../shared/snack-bar/snack-bar.component';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  public readonly createFormGroup: FormGroup;

  constructor(
    private http: HttpClient,
    private readonly formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public userService: UsersService
  ) {
    this.createFormGroup = this.formBuilder.group({
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

  ngOnInit(): void {}

  submit() {
    if (this.createFormGroup.invalid) {
      alert('Invalid Input');
      return;
    }
    let formObj = this.createFormGroup.getRawValue(); // {name: '', description: ''}

    let serializedForm = JSON.stringify(formObj);

    this.userService.createUser(serializedForm).subscribe({
      next: (data) => {
        alert('User created successfully');
        this.snackBar.openFromComponent(SnackBarComponent);
        this.createFormGroup.reset();
      },
      error: (error: HttpErrorResponse) => {
        if (error.statusText == 'Internal Server Error' || error.status > 200) {
          alert('There was an error creating a new user');
        } else {
          this.snackBar.openFromComponent(SnackBarComponent, {
            duration: 2000,
          });
          this.createFormGroup.reset();
        }
      },
    });
  }
}
