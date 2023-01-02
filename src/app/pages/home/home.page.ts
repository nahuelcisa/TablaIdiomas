import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  apretado: boolean = false;

  animales: boolean = false;
  numeros: boolean = true;
  colores: boolean = false;

  espanol : boolean = false;
  portugues : boolean = false;
  english : boolean = true;

  idioma : string = '_eng';

  ruta : string;
  sonido: any;


  constructor(private auth: AngularFireAuth, private router: Router) {

  }

  elegirAudio(a : string){

    if(this.animales){
      this.ruta = '../../../assets/a_animals/' + a + this.idioma +'.mp3';
      this.sonido = new Audio(this.ruta);
      this.sonido.play();
    }else if(this.numeros){
      this.ruta = '../../../assets/a_numbers/' + a + this.idioma +'.mp3';
      this.sonido = new Audio(this.ruta);
      this.sonido.play();
    }else if(this.colores){
      this.ruta = '../../../assets/a_colors/' + a + this.idioma +'.mp3';
      this.sonido = new Audio(this.ruta);
      this.sonido.play();
    }
  }

  elegirIdioma(a){
    switch(a){
      case 1:
        this.espanol = false;
        this.portugues = true;
        this.english = false;
        this.idioma = '_por';
        break;

      case 2:
        this.espanol = false;
        this.portugues = false;
        this.english = true;
        this.idioma = '_eng';
      break;

      case 3:
        this.espanol = true;
        this.portugues = false;
        this.english = false;
        this.idioma = '_esp';
      break;
  }
}

  logOut(){
    this.auth.signOut().then(()=>{

      this.apretado = true;

      setTimeout(()=>{
        
        this.router.navigate(["/login"]);

        this.apretado = false;
        
      },2000);
    });
  }

  elegirTema(a){
    switch(a){
      case 1:
        this.animales = false;
        this.numeros = true;
        this.colores = false;
        break;

      case 2:
        this.animales = false;
        this.numeros = false;
        this.colores = true;
      break;

      case 3:
        this.animales = true;
        this.numeros = false;
        this.colores = false;
      break;

    }
  }

}
