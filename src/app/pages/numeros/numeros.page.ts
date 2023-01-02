import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  @Output() numeros = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  numeroElegido(a : string){
    this.numeros.emit(a);
  }

}
