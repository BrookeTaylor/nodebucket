/**
 *  Title: Nodebucket
 *  Arthur: Professor Krasso
 *  Date: 08/27/2023
 *  Description: angular security service
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  findEmployeeById(empId: number) {
    return this.http.get('/api/employees/' + empId)
  }
}
