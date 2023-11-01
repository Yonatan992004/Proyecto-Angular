//Este módulo proporciona las herramientas necesarias para iniciar la aplicación Angular en un navegador web.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importamos el módulo AppModule, que es donde se encuentra nuestra aplicación angular
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)//inicia la aplicacion Angular, utilizando el modulo raiz appModule
  .catch(err => console.error(err));//se utiliza para manejar cualquier error que pueda ocurrir durante de proceso de inicializacion

//es nesario mantenerlo por que si se elimina habria problemas con la app