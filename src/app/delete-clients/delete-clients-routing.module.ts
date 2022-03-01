import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteClientsPage } from './delete-clients.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteClientsPageRoutingModule {}
