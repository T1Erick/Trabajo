import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundPageComponent } from './nofoundpages/nofoundpage.component';
import { LoginComponent } from './auth/login/login.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages/pages--routing.module';

const routes :Routes =[
  {path: '', component: LoginComponent},
  {path:'**',component: NoFoundPageComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
