import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista Tarefas Decola';
  tarefasArray: string[] = [];


  //metodo p/ add task

  adicionarTarefa(valor:string){
    this.tarefasArray.push(valor);
    console.log('adicionando uma tarefa');
    console.log(`add tarefa: ${valor}`)
  }

  removerTarefa(valor: string){
    for( let i = this.tarefasArray.length; i >= 0 ; i--){
      if(valor == this.tarefasArray[i]){
        this.tarefasArray.splice(i , 1);
      }
    }
  }





  constructor(){
    // this.tarefasArray.push("limpar monitor ");
    // this.tarefasArray.push("tirar lixo  ");


  }
}
