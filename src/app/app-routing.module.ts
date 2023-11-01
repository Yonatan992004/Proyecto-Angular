//Imports: En esta sección, se importan los módulos necesarios desde Angular y otras dependencias.
//NgModule es una decoración que se utiliza para definir un módulo de Angular.
//RouterModule es el módulo de enrutamiento de Angular que se utiliza para configurar las rutas de la aplicación.
//Routes es una clase que se utiliza para definir las rutas de la aplicación.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];//Se crea un array de rutas vacío llamado routes.

//Se utiliza NgModule para configurar el módulo de enrutamiento de la aplicación:
//Se importa RouterModule y se utiliza forRoot(routes) para configurar las rutas.
//El módulo de enrutamiento se exporta para su uso en otros módulos.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//La clase AppRoutingModule se exporta, representando el módulo de enrutamiento de la aplicación. Las rutas reales se definirán en el array routes más adelante.