import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SERVER_URL } from '../api/api';
import { ClientService } from '../services/api';
import { LoadingService } from '../services/loading';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.page.html',
  styleUrls: ['./edit-clients.page.scss'],
})
export class EditClientsPage implements OnInit {

  CodigoClientes
  NomeCliente = ''
  CPF = ''
  Sexo = ''
  Email = ''
  param1
  httpOptions
  clienteModificado
  client: ClientService;

  clientesDados: any;
  dados:any
  newDados:any;

  constructor(
    private loading: LoadingService,
    private http: HttpClient,
    private router: Router,
    public toastController: ToastController,
    private route: ActivatedRoute,
    private clientService: ClientService,
    ) {
      this.route.queryParams.subscribe(params => {
        this.param1 = params['id'];
  
      });
     }

  async ngOnInit() {

    let  id:any
    id = this.route.snapshot.paramMap.get("id");

   await this.clientService.readById(this.param1).subscribe(async (client) => {
      this.dados = client
      this.client = this.dados
      this.clientesDados =  await this.client


      this.CodigoClientes = this.clientesDados.CodigoCliente
      this.NomeCliente = this.clientesDados.Nome
      this.Sexo = this.clientesDados.Sexo
      this.CPF = this.clientesDados.CPF
      this.Email = this.clientesDados.Email
   
      
    });

    
  }
  
  async f_CodigoCliente(event) {
    this.CodigoClientes = event.detail.value;
  }
  async f_NomePergunta(event) {
    this.NomeCliente = event.detail.value;
  }
  async f_Sexo(event) {
    this.Sexo = event.detail.value;
  } 
  async f_CPF(event) {
    this.CPF = event.detail.value;
  }
  async f_Email(event) {
    this.Email = event.detail.value;
  }

  updateClient(): void {
    this.newDados = {
      Nome: this.NomeCliente,
      CodigoCliente: this.CodigoClientes,
      CPF: this.CPF,
      Sexo: this.Sexo,
      Email: this.Email,
      id :  this.clientesDados.id
    }

    this.clientService.update(this.newDados).subscribe(() => {
      alert("Cliente atualizado com sucesso!");
      this.router.navigate(["/home"]);
    });
  }
}
