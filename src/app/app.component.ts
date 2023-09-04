/**
 *  Title: Nodebucket
 *  Arthur: Professor Krasso
 *  Date: 09/03/2023
 *  Description: angular app component
 */

// imports statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- This router-outlet displays the content of the BaseLayout or AuthLayout components -->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
