import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditClientsPage } from './edit-clients.page';

const routes: Routes = [
  {
    path: '',
    component: EditClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditClientsPageRoutingModule {}
