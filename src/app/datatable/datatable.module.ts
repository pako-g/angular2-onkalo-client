import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { DatatableComponent } from './datatable.component'
import { KeysPipe } from './pipes/keys.pipe'
import { ValuesPipe } from './pipes/values.pipe'
import { MaterialModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    DatatableComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    KeysPipe,
    ValuesPipe,

  ],
  exports: [
    DatatableComponent,
   ]
})
export class DatatableModule { }
