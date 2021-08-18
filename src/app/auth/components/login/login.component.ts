import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public readonly loginFormGroup: FormGroup;
  constructor(
    private http: HttpClient,
    private readonly formBuilder: FormBuilder
  ) {
    this.loginFormGroup = this.formBuilder.group({
      username: [],
      password: [],
    });
  }

  login() {
    alert('Logging in');
  }
  ngOnInit(): void {}
}
