import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { SectionFormComponent } from './section-form/section-form.component';
import { SectionListComponent } from './section-list/section-list.component';

@NgModule({
  declarations: [ListEmployeeComponent, EmployeeListComponent, EmployeeFormComponent, SectionFormComponent, SectionListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
