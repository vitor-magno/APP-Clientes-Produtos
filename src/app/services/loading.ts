import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(public loadingController: LoadingController) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles' ,
      message: 'Aguarde...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
     await loading.present();
  }
}
