// Importa modulos y decoradores necesarios
import { Component } from '@angular/core';

// Decorador @Component que define las propiedades del componente
@Component({
  //selector define el nombre de la etiqueta personalizada que se usara para insertar el componente en una plantilla html
  selector: 'app-root',// Selector del componente, utilizado en las plantillas HTML
  
  //el template especifica la ubicacion de un archivo html que contiene el marcado de la plantilla para el componente
  templateUrl: './app.component.html',// Ruta a la plantilla HTML asociada al componente
  
  //Es un arreglo de rutas a archivos css que se aplicaran a vista del componente
  styleUrls: ['./app.component.css']// Rutas a las hojas de estilo (CSS) asociadas al componente
})

//clase del componente
export class AppComponent {
  tasks: string[] = []; // Un arreglo para almacenar las tareas
  editingTaskIndex: number | null = null; // Índice de la tarea en edición o null si no hay edición
  editedTask: string = '';// La tarea que se está editando
  newTask: string = '';// La nueva tarea que se va a agregar

  // Método para agregar una nueva tarea
  addTask(newTask: string) {
    if (newTask.trim() !== '') {//metodo trim es para eliminar espacios
      this.tasks.push(newTask);// Agrega la nueva tarea al arreglo de tareas
      this.newTask = '';// Limpia el campo de entrada de nueva tarea
    }
  }

  // Método para eliminar una tarea
  deleteTask(index: number) {
    this.tasks.splice(index, 1);// Elimina la tarea en el índice especificado
    //splice se usa para modificar arrays
  }

  // Método para iniciar la edición de una tarea
  startEditingTask(index: number) {
    this.editingTaskIndex = index;// Establece el índice de la tarea que se está editando
    this.editedTask = this.tasks[index];// Copia el valor de la tarea para la edición
  }

  // Método para actualizar una tarea editada
  updateTask(index: number) {
    if (this.editedTask.trim() !== '') {
      this.tasks[index] = this.editedTask;// Actualiza la tarea en el arreglo
      this.editingTaskIndex = null;// Finaliza la edición
    }
  }

  // Método para cancelar la edición de una tarea
  cancelEditingTask() {
    this.editingTaskIndex = null;// Establece el índice de edición a nulo
  }

  // Método para cambiar el estado de una tarea entre "Pendiente" y "Completada"
  toggleTaskStatus(index: number) {
    // Comprueba si la tarea actual está marcada como "Completada"
    if (this.isTaskCompleted(index)) {
      // Si la tarea está marcada como "Completada", cambia su estado a "Pendiente"
      this.tasks[index] = this.tasks[index].replace(' (Completada)', '');
    } else {
      // Si la tarea está marcada como "Pendiente", cambia su estado a "Completada"
      this.tasks[index] = this.tasks[index] + ' (Completada)';
    }
  }
  
  //Metodo para verificar si una tarea esta marcada como "Completada"
  isTaskCompleted(index: number): boolean {
    //Utiliza el metodo includes para verificar si el texto de la tarea contiene "(Completada)"
    return this.tasks[index].includes('(Completada)');
  }
  
}
