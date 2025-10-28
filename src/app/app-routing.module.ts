//Este es el archivo de rutas

//El routermodules y el routes son los que permiten utilizar rutas y navegacion 
// de la pagina en angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioSesionComponent } from './pages/autorizacion/inicio-sesion/inicio-sesion.component';
import { SeptiembreComponent } from './pages/productos/divisiones/septiembre/septiembre.component';
import { NinaCofiasComponent } from './pages/productos/divisiones/nina-cofias/nina-cofias.component';
import { UnambosComponent } from './pages/productos/divisiones/unambos/unambos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {
    //definir primera ruta, van entre llaves= {}
    path: "", component: InicioComponent
  },
  {
    path: "inicio", component: InicioComponent
  },
  {
    path: "productos", component: ProductosComponent
  },
  {
    path: "21-septiembre", component: SeptiembreComponent
  },
  {
    path: "nina-cofias", component: NinaCofiasComponent
  },
  {
    path: "unambos", component: UnambosComponent
  },
  {
    path: "contacto", component: ContactoComponent
  },
  { 
    path: 'carrito', component: CarritoComponent 
  },
  {
    path: "inicio-sesion", component: InicioSesionComponent
  },
  {
    path: '**', redirectTo: '/inicio'
  }
  //1- Ruta raiz 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


