import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteProductsPage } from './delete-products.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteProductsPageRoutingModule {}
