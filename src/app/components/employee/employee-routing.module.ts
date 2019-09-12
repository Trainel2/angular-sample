import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionFormComponent } from './section-form/section-form.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeListComponent },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'section', component: SectionListComponent },
  { path: 'section-form', component: SectionFormComponent },
  { path: 'section-form/:id', component: SectionFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
