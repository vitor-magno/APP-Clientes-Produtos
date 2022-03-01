import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SERVER_URL } from '../api/api';
import { ClientService } from '../services/api';
import { Client } from '../services/cliente.model';
import { LoadingService } from '../services/loading';

@Component({
  selector: 'app-delete-clients',
  templateUrl: './delete-clients.page.html',
  styleUrls: ['./delete-clients.page.scss'],
})
export class DeleteClientsPage implements OnInit {
  CodigoCliente =   ''
  NomeCliente = ''
  CPF = ''
  Sexo = ''
  Email = ''

  httpOptions
  clienteModificado

  client: Client;
  id:any;
  

  constructor(
    private loading: LoadingService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    public toastController: ToastController,
    private clientService: ClientService,

    ) { }

  ngOnInit() {

    this.id  = this.route.snapshot.paramMap.get('id');
    this.clientService.readById(this.id).subscribe((client) => {
      this.client = client
    });


  }
  
  deleteClient(): void {
    this.clientService.delete(this.id).subscribe(() => {
      alert("Cliente deletado com sucesso")
      delete this.id  
      this.router.navigate(["/home"]);
     });
  }
}
