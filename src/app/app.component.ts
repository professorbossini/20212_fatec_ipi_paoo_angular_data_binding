import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero;
  escolher(){
    this.numero = Math.floor(Math.random() * 100) + 1
  }


  // nome;
  // esconderCaixa = true

  // alterarNome(evento){
  //   console.log(evento.target.value)
  //   this.nome = evento.target.value
  // }

  // adicionar(nome){
  //   this.nome = nome
  //   this.esconderCaixa = false
  //   console.log(nome)
  //   console.log("Adicionando...")
  // }

}
