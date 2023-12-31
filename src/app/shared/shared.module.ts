import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [FooterComponent,HeaderComponent,SharedComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent,HeaderComponent,SharedComponent]
})
export class SharedModule { }
