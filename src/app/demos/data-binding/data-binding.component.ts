import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent {

  public contadorClique: number = 0;

  public urlImagem = "https://angular.io/assets/images/logos/angular/angular.svg"

  public nomeKeyUp: string = "";

  public nomeTwoWayBinding: string = "";

  public nomeElegante: string = "";

  adicioanrClique(){
  this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  KeyUp(event: any){

    this.nomeKeyUp = event.target.value;  
  }
}