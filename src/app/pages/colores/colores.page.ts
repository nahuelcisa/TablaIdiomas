import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  @Output() colores = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  elegirColor(a : string){
    this.colores.emit(a);
  }

}
