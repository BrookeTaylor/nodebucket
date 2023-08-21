/**
 *  Title: Nodebucket
 *  Arthur: Professor Krasso
 *  Date: 08/20/2023
 *  Description: security component
 */

// imports statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  // router outlet for the security module
  template: `
    <!-- the code here as been added to test the security module -->
    <div class='container-fluid'>
      <div class='row'>
        <div class='col'>
          <h1>Nodebucket App <span class="material-icons">login</span></h1>

          <!-- image source: https://unsplash.com/photos/0V7_N62zZcU -->
          <img class="img-fluid" src="./assets/dollar-gill.jpg" alt="Sign in book with crystal ball">

          <figcaption>(Image source: unsplash)</figcaption>

        </div>

        <div class='col'>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class SecurityComponent {

}
