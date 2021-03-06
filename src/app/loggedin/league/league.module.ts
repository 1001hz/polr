import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NEW_LEAGUE_COMPONENTS } from './new';
import { EDIT_LEAGUE_COMPONENTS } from './edit';
import { JOIN_LEAGUE_COMPONENTS } from './join';
import { VIEW_LEAGUE_COMPONENTS } from './view';

import { ROUTES } from './league.routes';

@NgModule({
  declarations: [
    ...NEW_LEAGUE_COMPONENTS,
    ...EDIT_LEAGUE_COMPONENTS,
    ...JOIN_LEAGUE_COMPONENTS,
    ...VIEW_LEAGUE_COMPONENTS
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class LeagueModule{}
