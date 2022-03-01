import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadClientsPageRoutingModule } from './read-clients-routing.module';

import { ReadClientsPage } from './read-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadClientsPageRoutingModule
  ],
  declarations: [ReadClientsPage]
})
export class ReadClientsPageModule {}
