import { ITarefaDto } from './../interfaces/ITarefaDto';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarefas-detalhe',
  templateUrl: './tarefas-detalhe.component.html',
  styleUrls: ['./tarefas-detalhe.component.css']
})
export class TarefasDetalheComponent {
  tarefaDto: ITarefaDto = { id: 0 , nome: ''};

  AtualizarTarefa(){
    this.router.navigate(['lista']);
  }

  constructor(private route: ActivatedRoute , private router: Router){

    let idRecebido:number;

    this.route.paramMap.subscribe(params => {
   idRecebido = Number(params.get('id'));
    })

  }
}
