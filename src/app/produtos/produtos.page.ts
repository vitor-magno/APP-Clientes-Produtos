import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
import { AlertController, ToastController } from '@ionic/angular';
import { LoadingService } from '../services/loading';
import { SERVER_URL } from '../api/api';
import { ProductService } from '../services/api-product.';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {


  CodigoProduto
  NomeProduto = ''
  Fabricacao = ''
  Tamanho = ''
  Valor

  Liberado = false

  navigationSubscription
  httpOptions
  dadosCadastro
  product: any

  constructor(
    private router: Router,
    public toastController: ToastController,
    private loading: LoadingService,
    public alertController: AlertController,
    private http: HttpClient,
    private productService: ProductService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
   }

  ngOnInit() {
    this.httpOptions = {
      headers: new HttpHeaders({
        // "x-access-token": localStorage.getItem("token"),
      }),
    };
  }

  initialiseInvites() {
    this.CodigoProduto = ''
    this.NomeProduto = ''
    this.Fabricacao = ''
    this.Tamanho = ''
    this.Valor = ''
    this.Liberado = false;
  }

  async f_CodigoProduto(evento) {
    this.CodigoProduto = evento.detail.value;
    this.verificaDados();
  }
  async f_NomeProduto(evento) {
    this.NomeProduto = evento.detail.value;
    this.verificaDados();
  }
  async f_Fabricacao(evento) {
    this.Fabricacao = evento.detail.value;
    this.verificaDados();
  }
  async f_Tamanho(evento) {
    this.Tamanho = evento.detail.value;
    this.verificaDados();
  }
  async f_ValorProduto(evento) {
    this.Valor = evento.detail.value;
    this.verificaDados();
  }
  
  async verificaDados() {
    if (this.CodigoProduto && this.NomeProduto && this.Fabricacao && this.Tamanho && this.Valor) this.Liberado = true;
  }

  createProduct(): void {

    this.product = {
      CodigoProduto: this.CodigoProduto,
      Nome: this.NomeProduto,
      Fabricacao: this.Fabricacao,
      Tamanho: this.Tamanho,
      Valor: this.Valor
    }

    this.productService.create(this.product).subscribe(() => {
      alert("Produto Criado")
      this.router.navigate(['/home'])
    })

  }

}
