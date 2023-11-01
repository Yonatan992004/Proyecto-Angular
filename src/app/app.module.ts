//Importa la clase NgModule de '@angular/core'. Esta clase se utiliza para decorar la clase AppModule y definir cómo se comportará el módulo.
import { NgModule } from '@angular/core';
//Este módulo es necesario para la ejecución de aplicaciones web en un navegador.
import { BrowserModule } from '@angular/platform-browser';
// Este módulo proporciona funcionalidad relacionada con formularios en Angular
import { FormsModule } from '@angular/forms';

//Importa un módulo de enrutamiento personalizado,Esto sugiere que en la aplicación se utiliza enrutamiento para navegar entre diferentes vistas.
import { AppRoutingModule } from './app-routing.module';
//Importa el componente raíz de la aplicación. El componente raíz es el punto de entrada de la aplicación.
import { AppComponent } from './app.component';

@NgModule({ //Esta es una anotación que se aplica a la clase AppModule. Aquí se configuran y se definen las características del módulo.
  declarations: [//en esta propiedad se enumeran todos los componentes, directivas y tuberías que pertenecen a este módulo. En este caso, 
  //solo se declara el componente AppComponent.
    AppComponent
  ],
  imports: [//En esta propiedad se enumeran los módulos que se importan y se utilizan en este módulo. Aquí, 
  //se importa BrowserModule, AppRoutingModule, y FormsModule.
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],//aqui se define los servicios o inyecciones de dependencias que estaran disponiblesmen toda la app, en este caso esta vacia
  bootstrap: [AppComponent]//especifica el componente raíz que se iniciará cuando se cargue la aplicación. En este caso, el componente raíz es AppComponent
})
export class AppModule { }//aqui exporta la clase
