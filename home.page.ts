import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  peso: string;
  altura: string;
  resimc: number;
  resImcArred: string;
  sexo: string;
  erro: string;
  constructor() {}
  inserir(){
    if(this.sexo === 'H'|| this.sexo === 'h'){
      this.resimc= (72.7 * parseFloat(this.altura)) - 50;
      this.resImcArred = this.resimc.toFixed(2);
    }else if(this.sexo=== 'M'|| this.sexo === 'm'){
      this.resimc= ((62.1 * parseFloat(this.altura)) - 44.7);
      this.resImcArred = this.resimc.toFixed(2);
    }else{
      this.erro='Você deve escolher entre "H" Homem ou "M" Mulher';
      return;
    }
  }
}
