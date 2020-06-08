import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produtos.services';
import { Produto } from '../produto';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html' 
})

export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[];
  
  ngOnInit(): void {
    this.produtoService.obterProdutos()
    .subscribe(
      produtos1 => {
        this.produtos = produtos1;
        console.log(produtos1);
      },
      error => {
        console.log(error);
      }
    )
  }
}
