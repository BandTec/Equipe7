import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import * as RellaxDirective from 'rellax';
import * as Rellax from 'rellax';
//import { NgImageSliderComponent } from 'ng-image-slider';

declare const rellax: any;

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css',
    './conteudoUm.component.css']
})


@NgModule({
  imports: [
    Rellax
  ],
  declarations: [RellaxDirective]
})


export class ConteudoComponent {

  constructor() { }

  ngOnInit() {
    rellax();
  }


}
