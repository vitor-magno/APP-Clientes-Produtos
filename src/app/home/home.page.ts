import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) {


  }

  navigationProducts(){
    this.router.navigate(['/produtos'])
  }

  navigationClients(){
    this.router.navigate(['/clientes'])
  }

  readClients(){
    this.router.navigate(['/read-clients'])
  }

  readProducts(){
    this.router.navigate(['/read-products'])
  }

}
