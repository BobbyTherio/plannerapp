import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Igoal } from '../interfaces/igoal';
import { Itask } from '../interfaces/itask';
import { GoalService } from '../services/goal.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  tasks!:Itask[];
  goals!:Igoal[];

  constructor(private taskService:TaskService, private goalService: GoalService, private navCtrl: NavController) { }

  ionViewWillEnter(){
    console.log("I am in Tab 4");
    this.taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    }, (err) => {
      console.log(err);
    });

    console.log("Before getGoals")
    this.goalService.getGoals().subscribe((results) => {
      console.log("After getGoals")
      this.goals = results;
      console.log("After results")
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }
  
}
