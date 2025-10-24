//Aca se usa la logica del componente - Inicio 

import { Component, OnInit } from '@angular/core';

//Un indicador de que el archivo va a ser del tipo componente
/**Lo que esta dentro de las llaves son los metadatos, del componente*/ 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
