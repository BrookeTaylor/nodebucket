/**
 *  Title: Nodebucket
 *  Arthur: Professor Krasso
 *  Date: 09/03/2023
 *  Description: employee interface
 */

import { Item } from './item.interface';

export interface Employee {
  empId: number
  todo: Item[]
  done: Item[]
}