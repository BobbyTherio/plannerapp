import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itask } from 'src/app/interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }

  getTasks() {
    return this.httpClient.get<Itask[]>('http://localhost:3000/tasks');
  }

  createTask(formData:any) {
    return this.httpClient.post('http://localhost:3000/tasks', formData);
  }

  updateTask(id:any, formData:any) {
    return this.httpClient.patch('http://localhost:3000/tasks/'+ id, formData);
  }

  deleteTask(id) {
    return this.httpClient.delete(`http://localhost:3000/tasks/${id}`);
  }
}
