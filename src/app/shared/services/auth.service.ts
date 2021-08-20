import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  claimsObject: any;
  roles: [string];
  constructor(private msalService: MsalService) {}

  login() {
    return this.msalService.loginPopup();
  }
  isLoggedIn() {
    this.getRoles();
    return this.msalService.instance.getAllAccounts().length > 0;
  }
  logout() {
    return this.msalService.logoutRedirect().subscribe((response) => {
      this.roles = [''];
    });
  }
  getRoles() {
    this.claimsObject =
      this.msalService.instance.getActiveAccount()?.idTokenClaims;
    if (this.claimsObject == undefined) {
      return;
    }
    this.roles = this.claimsObject['roles'];
  }
  isAdmin() {
    if (!Array.isArray(this.roles) || !this.roles.length) {
      return false;
    }
    return this.roles.indexOf('Admin') > -1;
  }
  isManager() {
    if (!Array.isArray(this.roles) || !this.roles.length) {
      return false;
    }
    return this.roles.indexOf('Manager') > -1;
  }
  isUser() {
    if (!Array.isArray(this.roles) || !this.roles.length) {
      return false;
    }
    return this.roles.indexOf('User') > -1;
  }
  returnUserInfo(): AccountInfo {
    return this.msalService.instance.getActiveAccount();
  }
}
