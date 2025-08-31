import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { MyresumeComponent } from './components/myresume/myresume.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {  path:'',
  component:HomeComponent,
  pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },{
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full'
  },{
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },{
    path:'myresume',
    component:MyresumeComponent,
    pathMatch:'full'
  },{
    path:'about',
    component:AboutComponent,
    pathMatch:'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)], // 👈 this makes routing work
  exports: [RouterModule],
})
export class AppRoutingModule {}