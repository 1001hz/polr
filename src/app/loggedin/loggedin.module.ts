import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HOME_COMPONENTS } from './home';

import { ROUTES } from './loggedin.routes';

@NgModule({
  declarations: [
    ...HOME_COMPONENTS
  ],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class LoggedInModule {}
