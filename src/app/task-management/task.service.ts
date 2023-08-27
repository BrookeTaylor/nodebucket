/**
 *  Title: Nodebucket
 *  Arthur: Professor Krasso
 *  Date: 08/27/2023
 *  Description: task service
 */

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTask(empId: number) {

    return this.http.get('api/employees/' + empId + '/tasks')
  }

  addTask(empId: number, task: Item) {

    return this.http.post('/api/employees/' + empId + '/tasks', { task })

  }
}
