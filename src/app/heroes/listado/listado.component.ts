import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {


  heroes:string[]=['SpiderMan','Batman','Robin']
  heroeBorrado:string='';

  borrarHeroe(){
    this.heroeBorrado= this.heroes.shift() || '';
     
  }


  constructor() { }

  ngOnInit(): void {
  }

}
