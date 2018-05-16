// ng g m shared/Shared --flat -m products/product.module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent
  ],
  exports: [
    StarComponent, // export the component so it can be used
    CommonModule,
    FormsModule  // export these so we don't need to import them into every module (reactive, material design, etc..)
  ]
})
export class SharedModule { }
