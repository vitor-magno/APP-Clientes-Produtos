import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteClientsPageRoutingModule } from './delete-clients-routing.module';

import { DeleteClientsPage } from './delete-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteClientsPageRoutingModule
  ],
  declarations: [DeleteClientsPage]
})
export class DeleteClientsPageModule {}
