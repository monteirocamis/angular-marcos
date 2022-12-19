import { ITarefaDto } from './../interfaces/ITarefaDto';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarefas-detalhe',
  templateUrl: './tarefas-detalhe.component.html',
  styleUrls: ['./tarefas-detalhe.component.css']
})
export class TarefasDetalheComponent implements OnInit{

  ngOnInit(): void {
   // throw new Error('method not implemented')
  }
  @Input()  tarefaParaDetalhar!: ITarefaDto;
  @Input() public finalizarVisualizacao!:()=>void;
  // tarefaDto: ITarefaDto = { id: 0 , nome: ''};

  fecharVisualizacao(){
    this.finalizarVisualizacao();
  }

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
