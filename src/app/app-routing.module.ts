import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'read-clients',
    loadChildren: () => import('./read-clients/read-clients.module').then( m => m.ReadClientsPageModule)
  },
  {
    path: 'read-products',
    loadChildren: () => import('./read-products/read-products.module').then( m => m.ReadProductsPageModule)
  },
  {
    path: 'edit-clients',
    loadChildren: () => import('./edit-clients/edit-clients.module').then( m => m.EditClientsPageModule)
  },
  {
    path: 'edit-products',
    loadChildren: () => import('./edit-products/edit-products.module').then( m => m.EditProductsPageModule)
  },
  {
    path: 'delet-products',
    loadChildren: () => import('./delete-products/delete-products.module').then( m => m.DeleteProductsPageModule)
  },
  {
    path: 'delet-clients',
    loadChildren: () => import('./delete-clients/delete-clients.module').then( m => m.DeleteClientsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
