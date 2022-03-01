import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../services/api';
import { Client } from '../services/cliente.model';

@Component({
  selector: 'app-read-clients',
  templateUrl: './read-clients.page.html',
  styleUrls: ['./read-clients.page.scss'],
})
export class ReadClientsPage implements OnInit {

  dados: any
  clients:  Client[]

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
   }

  ngOnInit() {

    this.clientService.read().subscribe(clients => {
      this.dados = clients
      this.clients = this.dados.resposta
    })

  }

  deleteClients(id){
    this.clientService.delete(id).subscribe(() => {
      alert("Cliente deletado com sucesso")
      this.router.navigate(["/read-clients"]);
      document.location.reload();
     });

  }

  editClients(id){
    this.router.navigate(['/edit-clients'], { queryParams: { id: id } })
  }

}
