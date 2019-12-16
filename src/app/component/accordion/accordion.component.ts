import { Component,Input } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { TaskService } from '../../services/task.service';

import { Task } from '../../models/tasks';

@Component({
	selector: 'app-ngbd-accordion-basic',
	templateUrl: 'accordion.component.html'
})

export class NgbdAccordionBasicComponent {

	tasks: Task[];
	editState: boolean = false;
	taskToEdit: Task;
	@Input() name:string;
	

	//Como se guardaran en la base de datos 
	task: Task = {
		id:'',
		nombres: '',
		telefono: '',
		nomPerrito:'',
		email:'',
		direccion:'',
		ciudad:''

		

	   };
	constructor(public taskService: TaskService) { }


	//almacena lo de la base de datos en un arreglo llamado tasks
	ngOnInit() {
	  this.taskService.getTasks().subscribe(tasks => {
		 console.log(tasks);
		 this.tasks = tasks;
	  });
	}

	//Guardamos en el arreglo los valores obtenidos de la base de datos
	onSubmit() {
		if(this.task.nombres != '' && this.task.telefono != '' ) {
			
		  this.taskService.addTask(this.task);
		  this.task.nombres = '';
		  this.task.telefono = '';
		  this.task.nomPerrito = '';
		  this.task.email = '';
		  this.task.direccion = '';
		  this.task.ciudad = '';

		}
	}
	
	beforeChange($event: NgbPanelChangeEvent) {
		if ($event.panelId === 'preventchange-2') {
			$event.preventDefault();
		}

		if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
			$event.preventDefault();
		}
	}

//Para eliminar un usuario de la tabla
  deleteTask(event, task) {
    const response = confirm('Estas seguro de eliminar el itme?');
    if (response ) {
      this.taskService.deleteTask(task);
    }
    return;
  }

  //editar un usuario de la tabla
  editTask(event, task) {
    this.editState = !this.editState;
    this.taskToEdit = task;
  }
//Modificar un usuario de la tabla
  updateTask(task) {
    this.taskService.updateTask(task);
    this.taskToEdit = null;
    this.editState = false;
  }
  


	disabled = false;
}
