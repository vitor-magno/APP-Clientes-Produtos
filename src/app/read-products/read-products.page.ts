import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/api-product.';
import { Product } from '../services/product.model';

@Component({
  selector: 'app-read-products',
  templateUrl: './read-products.page.html',
  styleUrls: ['./read-products.page.scss'],
})
export class ReadProductsPage implements OnInit {

  products: Product[]
  dados: any
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {

    this.productService.read().subscribe(products => {
      
      this.dados = products
      this.products = this.dados
    })
  }

  

  deleteProducts(id){
    this.productService.delete(id).subscribe(() => {
      alert("Produto deletado com sucesso")
      this.router.navigate(["/home"]);
      document.location.reload();
     });
  }
  

  editProducts(id){
    this.router.navigate(['/edit-products'], { queryParams: { id: id } })
  }

}
