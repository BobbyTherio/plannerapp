import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Igoal } from '../interfaces/igoal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private httpClient:HttpClient) { }

  getGoals() {
    return this.httpClient.get<Igoal[]>('http://localhost:3000/goals');
  }

  createGoal(formData:any) {
    return this.httpClient.post('http://localhost:3000/goals', formData);
  }

  updateGoal(id:any, formData:any) {
    return this.httpClient.patch('http://localhost:3000/goals/'+ id, formData);
  }

  deleteGoal(id) {
    return this.httpClient.delete(`http://localhost:3000/goals/${id}`);
  }
}