//Este es el archivo de rutas

//El routermodules y el routes son los que permiten utilizar rutas y navegacion 
// de la pagina en angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    //definir primera ruta, van entre llaves= {}
    path:"",component:InicioComponent
  },
  {
    path:"inicio",component:InicioComponent
  },
  {
    path:"productos",component:ProductosComponent
  },
  {
    path:"contacto",component:ContactoComponent
  },
  //1- Ruta raiz 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
