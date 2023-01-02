import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AnimalesComponent } from '../animales/animales.component';
import { ColoresPage } from '../colores/colores.page';
import { NumerosPage } from '../numeros/numeros.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatButtonToggleModule
  ],
  declarations: [HomePage, AnimalesComponent, ColoresPage, NumerosPage]
})
export class HomePageModule {}
