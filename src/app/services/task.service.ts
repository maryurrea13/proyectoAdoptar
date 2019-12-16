import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { Task } from '../models/tasks';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
  tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;
  taskDoc: AngularFirestoreDocument<Task>;

  constructor(public afs:AngularFirestore) {
    this.tasksCollection = this.afs.collection('tasks');
    this.tasks = this.afs.collection('tasks').valueChanges();

    //NOspermite obtener el id automatico que le asigna a cada coleccion firebase
   this.tasks = this.tasksCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Task;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  //nos pasa los datos de la base de datos
  getTasks() {
    return this.tasks; 
  }

  addTask(task: Task) {
    this.tasksCollection.add(task);
  }
  //para eliminar algun registro en la base de datos, se hace con el id automatico que genera firebase

  deleteTask(task: Task) {
    this.taskDoc = this.afs.doc(`tasks/${task.id}`);
    this.taskDoc.delete();
  }

  updateTask(task: Task) {
    this.taskDoc = this.afs.doc(`tasks/${task.id}`);
    this.taskDoc.update(task);
  }
}

