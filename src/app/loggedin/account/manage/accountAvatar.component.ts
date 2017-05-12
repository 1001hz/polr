import { Component } from '@angular/core';

@Component({
  selector: 'account-avatar',
  template: `
  <img src="" />
  <a (click)="changeAvatar()">Change Avatar</a>
  `
})
export class AccountAvatarComponent {

  changeAvatar(): void {
    console.log('Change avatar');
  }
}
