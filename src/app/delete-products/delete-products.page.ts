import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/api-product.';
import { Product } from '../services/product.model';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.page.html',
  styleUrls: ['./delete-products.page.scss'],
})
export class DeleteProductsPage implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  product: Product;
  id:any;
  

  ngOnInit() {
    this.id  = this.route.snapshot.paramMap.get('id');
    this.productService.readById(this.id).subscribe((product) => {
      this.product = product
    });


  }
  
  deleteProdut(): void {
    this.productService.delete(this.id).subscribe(() => {
      alert("Produto deletado com sucesso")
      delete this.id  
      this.router.navigate(["/home"]);
     });
  }
}
