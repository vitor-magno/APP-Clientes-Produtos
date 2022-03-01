import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteProductsPageRoutingModule } from './delete-products-routing.module';

import { DeleteProductsPage } from './delete-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteProductsPageRoutingModule
  ],
  declarations: [DeleteProductsPage]
})
export class DeleteProductsPageModule {}
