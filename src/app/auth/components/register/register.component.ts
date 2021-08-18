import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public readonly registerFormGroup: FormGroup;
  constructor(
    private http: HttpClient,
    private readonly formBuilder: FormBuilder
  ) {
    this.registerFormGroup = this.formBuilder.group({
      username: [],
      password: [],
      passwordAgain: [],
      email: [],
      firstName: [],
      lastname: [],
    });
  }

  register() {}

  ngOnInit(): void {}
}
