import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadProductsPageRoutingModule } from './read-products-routing.module';

import { ReadProductsPage } from './read-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadProductsPageRoutingModule
  ],
  declarations: [ReadProductsPage]
})
export class ReadProductsPageModule {}
