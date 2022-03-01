import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()

export class GlobalService {

  constructor(
    public toastController: ToastController,
    ) { }

  async toast(mensagem) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1000
    });
    toast.present();
  }

  async aviso(mensagem) {
    const aviso = await this.toastController.create({
      message: mensagem,
      duration: 1000
    });
    aviso.present();
  }


}
