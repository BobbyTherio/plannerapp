import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Igoal } from '../interfaces/igoal';
import { GoalService } from '../services/goal.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  goals!:Igoal[];

  constructor(private goalService:GoalService, private navCtrl: NavController) {}

  addGoal() {
    this.navCtrl.navigateForward(['add-goal']);
  }

  ionViewWillEnter(){
    console.log("I am in Tab 2");
    this.goalService.getGoals().subscribe((results) => {
      this.goals = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() : void {}
  
}
