import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarUsuarioComponent } from './Components/agregar-usuario/agregar-usuario.component';
import { ListarUsuarioComponent } from './Components/listar-usuario/listar-usuario.component';
import { VerUsuarioComponent } from './Components/ver-usuario/ver-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarUsuarioComponent,
    ListarUsuarioComponent,
    VerUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
