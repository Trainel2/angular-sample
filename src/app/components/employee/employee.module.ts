import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { SectionFormComponent } from './section-form/section-form.component';
import { SectionListComponent } from './section-list/section-list.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,
    SectionFormComponent,
    SectionListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
