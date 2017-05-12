import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Manage Account</h1>
    <account-avatar></account-avatar>
    <account-details-form></account-details-form>
    <div>
      <a [routerLink]=" ['./password'] "
        routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
        Change Password
      </a>
    </div>
  `
})
export class ManageAccountComponent{

}
