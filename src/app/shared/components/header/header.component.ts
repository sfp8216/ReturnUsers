import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { $$ } from 'protractor';
import { User } from 'src/app/users/User';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public readonly searchFormGroup: FormGroup;
  dataSource: any[] = [];
  displayResults: Boolean = true;

  constructor(
    public authService: AuthService,
    public userService: UsersService,
    private readonly formBuilder: FormBuilder
  ) {
    this.searchFormGroup = this.formBuilder.group({
      searchForPatient: [],
    });
  }

  ngOnInit(): void {
    this.searchFormGroup
      .get('searchForPatient')
      .valueChanges.subscribe((searchTerm) => {
        if (
          searchTerm == null ||
          searchTerm == undefined ||
          searchTerm == '' ||
          searchTerm == ' '
        ) {
          this.dataSource = [];
        } else {
          this.searchUsers(searchTerm);
        }
      });
  }
  toggleDisplay() {
    if (this.displayResults) {
      this.displayResults = false;
    } else {
      this.displayResults = true;
    }
    console.log(this.displayResults);
  }
  areResultsToShow(): Boolean {
    return this.dataSource.length > 0;
  }
  searchUsers(searchTerm: string) {
    const filterValue = searchTerm;
    this.userService.searchUser(filterValue).subscribe(
      (data: User[]) => {
        this.dataSource = data;
        this.dataSource = this.dataSource.slice(0, 5);
      },
      (err) => {
        this.dataSource = [];
      }
    );
  }
}
