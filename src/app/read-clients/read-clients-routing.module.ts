import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadClientsPage } from './read-clients.page';

const routes: Routes = [
  {
    path: '',
    component: ReadClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadClientsPageRoutingModule {}
