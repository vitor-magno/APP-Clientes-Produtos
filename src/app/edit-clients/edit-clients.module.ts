import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditClientsPageRoutingModule } from './edit-clients-routing.module';

import { EditClientsPage } from './edit-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditClientsPageRoutingModule
  ],
  declarations: [EditClientsPage]
})
export class EditClientsPageModule {}
