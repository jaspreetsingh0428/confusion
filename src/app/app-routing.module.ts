import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {routes_def} from './routes';

@NgModule(
  {
  imports: [
    CommonModule,
    RouterModule.forRoot(routes_def),
  ],
   exports: [RouterModule],

  declarations: [],
}
)

export class AppRoutingModule { }
