/**
 *  Title: Nodebucket
 *  Arthur: Professor Krasso
 *  Date: 08/20/2023
 *  Description: angular task management-routing module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagementComponent } from './task-management.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', component: TaskManagementComponent,
  children: [
    {
      path: 'my-tasks',
      component: TasksComponent,
      title: 'Nodebucket: My Tasks'
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagementRoutingModule { }
