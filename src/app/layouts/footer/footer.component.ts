/**
 *  Title: Nodebucket
 *  Arthur: Professor Krasso
 *  Date: 08/27/2023
 *  Description: footer component
 */

// imports statements
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();


  ngOnInit(): void {

  }
}
