import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasDetalheComponent } from './tarefas-detalhe/tarefas-detalhe.component';

const routes: Routes = [
  {path: 'lista' , component: TarefasListaComponent},
  {path: 'detalhe/:id' , component: TarefasDetalheComponent}, // /:atributo
  {path: '**' , redirectTo:'lista'} // url desconhecida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
