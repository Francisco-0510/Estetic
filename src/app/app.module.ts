import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaquetesComponent } from './usuarios/paquetes/paquetes.component';
import { PaquetesDetallesComponent } from './usuarios/paquetes-detalles/paquetes-detalles.component';
import { InicioComponent } from './usuarios/inicio/inicio.component';
import { CitasComponent } from './usuarios/citas/citas.component';
import { ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PaquetesComponent,
    PaquetesDetallesComponent,
    InicioComponent,
    CitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
