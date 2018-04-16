import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';
import {
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule
 } from '@angular/material';

import { routes } from './login.routes';
import { LoginComponent } from './login.component';
import { SiteLoginComponent } from './site-login/site-login.component';
@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    SiteLoginComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
    // ApolloModule.forRoot(client)
  ],
})
export class LoginModule {
  public static routes = routes;
}
