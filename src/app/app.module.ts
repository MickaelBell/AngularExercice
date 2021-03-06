import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { ListTestComponent } from './list-test/list-test.component';
import { MyFormComponent } from './my-form/my-form.component';
import {HttpClientModule}from'@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SignUpComponent,
    MenuComponent,
    ListTestComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
