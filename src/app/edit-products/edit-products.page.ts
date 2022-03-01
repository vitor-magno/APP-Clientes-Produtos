import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SERVER_URL } from '../api/api';
import { ProductService } from '../services/api-product.';
import { LoadingService } from '../services/loading';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.page.html',
  styleUrls: ['./edit-products.page.scss'],
})
export class EditProductsPage implements OnInit {

  CodigoProduto
  NomeProduto = ''
  Fabricacao = ''
  Tamanho = ''
  Valorr
  param1
  httpOptions
  produtoModificado

  product: ProductService;

  productDados: any;
  dados:any

  newDados: any
  

  constructor(
    private loading: LoadingService,
    private http: HttpClient,
    private router: Router,
    public toastController: ToastController,
    private route: ActivatedRoute,
    private productService: ProductService

    ) {
      this.route.queryParams.subscribe(params => {
        this.param1 = params['id'];
  
      });
     }

    async ngOnInit() {

    let  id:any
    id = this.route.snapshot.paramMap.get("id");
      await this.productService.readById(this.param1).subscribe(async (product) => {
      this.dados = product
      this.product = this.dados.resposta
      this.productDados =  await product

      this.CodigoProduto = this.productDados.CodigoProduto
      this.NomeProduto = this.productDados.Nome
      this.Fabricacao = this.productDados.Fabricacao
      this.Tamanho = this.productDados.Tamanho
      this.Valorr = this.productDados.Valor
    });


  }
  
  async f_CodigoProduto(event) {
    this.CodigoProduto = event.detail.value;
  }
  async f_NomeProduto(event) {
    this.NomeProduto = event.detail.value;
  }
  async f_Fabricacao(event) {
    this.Fabricacao = event.detail.value;
  }
  async f_Tamanho(event) {
    this.Tamanho = event.detail.value;
  }
  async f_Valor(event) {
    this.Valorr = event.detail.value;
    
  }

  updateProduct(): void {

    this.newDados = {
      CodigoProduto: this.CodigoProduto,
      Nome: this.NomeProduto,
      Tamanho: this.Tamanho,
      Fabricacao: this.Fabricacao,
      Valor: this.Valorr,
      id :  this.productDados.id
    }
    this.productService.update(this.newDados).subscribe(() => {
      alert("Produto atualizado com sucesso!");
      this.router.navigate(["/home"]);
    });
  }
}

