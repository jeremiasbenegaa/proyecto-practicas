import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { InicioSesionComponent } from './pages/autorizacion/inicio-sesion/inicio-sesion.component';
import { SeptiembreComponent } from './pages/productos/divisiones/septiembre/septiembre.component';
import { NinaCofiasComponent } from './pages/productos/divisiones/nina-cofias/nina-cofias.component';
import { UnambosComponent } from './pages/productos/divisiones/unambos/unambos.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    ContactoComponent,
    CarritoComponent,
    InicioSesionComponent,
    SeptiembreComponent,
    NinaCofiasComponent,
    UnambosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
