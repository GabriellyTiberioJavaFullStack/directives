import { Component } from '@angular/core';
import { Produto } from './interfaces/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  nome: string = ''
  imagem: string = ''
  preco: number = 0
  estoque: number = 0
  descricao: string = ''

  produtos: Produto[] = []

  adicionarProduto(evento: any): void {
    console.log(evento)
    /**
     * preventDefault() faz com que
     * o comportamento padrão de um elemento
     * HTML seja anulado
     */
    evento.preventDefault()

    /**
     * stopPropagation evita com que a emissão
     * do evento afete outros elementos HTML
     */
    evento.stopPropagation()

    this.produtos.push({
      descricao: this.descricao,
      estoque: this.estoque,
      imagem: this.imagem,
      nome: this.nome,
      preco: this.preco
    })
  }

  deletarProduto(p: Produto): void {
    const index = this.produtos.indexOf(p)
    this.produtos.splice(index, 1)
  }
}
