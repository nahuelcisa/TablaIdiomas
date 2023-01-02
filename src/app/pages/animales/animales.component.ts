import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss'],
})
export class AnimalesComponent implements OnInit {

  @Output() animales = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  animalElegido(a : string){
    this.animales.emit(a);
  }

}
