import { Component } from '@angular/core';
import { ITarefaDto } from './../interfaces/ITarefaDto';

@Component({
  selector: 'app-tarefa-editar',
  templateUrl: './tarefa-editar.component.html',
  styleUrls: ['./tarefa-editar.component.css']
})
export class TarefaEditarComponent {
  tarefaDto: ITarefaDto = { id: 0, nome: '' };

}
