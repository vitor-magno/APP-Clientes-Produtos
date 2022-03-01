import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { SERVER_URL } from '../api/api';
import { ClientService } from '../services/api';
import { Client } from '../services/cliente.model';
import { LoadingService } from '../services/loading';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  CodigoCliente = ''
  NomeCliente = ''
  CPF = ''
  Sexo = ''
  Email = ''
  
  Liberado = false
  
  navigationSubscription
  httpOptions
  dadosCadastro

  client = {
    CodigoCliente: this.CodigoCliente,
    Nome: this.NomeCliente,
    CPF: this.CPF,
    Sexo: this.Sexo,
    Email: this.Email
  }
  
  constructor(
    private router: Router,
    public toastController: ToastController,
    private loading: LoadingService,
    public alertController: AlertController,
    private http: HttpClient,
    private clientService: ClientService
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
        "x-access-token": localStorage.getItem("token"),
      }),
    };
  }
  
  initialiseInvites() {
    this.CodigoCliente 
    this.NomeCliente = ''
    this.CPF = ''
    this.Sexo = ''
    this.Email = ''
    this.Liberado = false;
  }
  
  async f_CodigoCliente(evento) {
    this.CodigoCliente = evento.detail.value;
    this.verificaDados();
  }
  async f_NomeCliente(evento) {
    this.NomeCliente = evento.detail.value;
    this.verificaDados();
  }
  async f_Sexo(evento) {
    this.Sexo = evento.detail.value;
    this.verificaDados();
  }
  async f_CPF(evento) {
    this.CPF = evento.detail.value;
    this.verificaDados();
  }
  async f_Email(evento) {
    this.Email = evento.detail.value;
    this.verificaDados();
  }
  
  async verificaDados() {
    if (this.CodigoCliente && this.NomeCliente && this.CPF && this.Sexo && this.Email) this.Liberado = true;
  }
  
  createClient(): void {

    this.client = {
      CodigoCliente: this.CodigoCliente,
      Nome: this.NomeCliente,
      CPF: this.CPF,
      Sexo: this.Sexo,
      Email: this.Email
    }

    this.clientService.create(this.client).subscribe(() => {
      alert("Cliente criado")
      this.router.navigate(['/home'])
      document.location.reload();
    })

  }

}


