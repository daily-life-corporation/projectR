import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { ViewRoutingModule } from './view-routing.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
