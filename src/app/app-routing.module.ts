//Este es el archivo de rutas

//El routermodules y el routes son los que permiten utilizar rutas y navegacion 
// de la pagina en angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    //definir primera ruta, van entre llaves= {}
    path:"",component:InicioComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
