import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListTestComponent } from './list-test/list-test.component';
import { MenuComponent } from './menu/menu.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'list-test', component: ListTestComponent},
  {path: 'app', component: AppComponent},
  {path: 'my-form', component: MyFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
