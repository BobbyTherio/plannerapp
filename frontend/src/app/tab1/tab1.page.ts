import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Itask } from '../interfaces/itask';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tasks!:Itask[];

  constructor(private taskService:TaskService, private navCtrl:NavController) {}

  addTask() {
    this.navCtrl.navigateForward(['add-task']);
  }

  ionViewWillEnter(){
    console.log("I am in Tab 1");
    this.taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    }, (err) => {
      console.log(err);
    });
  }
  
  ngOnInit() : void {}

}
