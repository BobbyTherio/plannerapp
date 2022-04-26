import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage implements OnInit {

  addGoal : FormGroup = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    date_of_start : new FormControl('', [Validators.required]),
    date_of_end : new FormControl('', [Validators.required]),
    status : new FormControl('pending', [Validators.required])
  });

  constructor(private toastCtrl: ToastController, private navCtrl: NavController, private goalService: GoalService) { }

  ngOnInit() {
  }

  async add_goal() {
    this.goalService.createGoal(this.addGoal.value).subscribe(() => {
      this.addGoal.reset();
    });
    const toast = await this.toastCtrl.create({
      message: 'New goal added successfully',
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
    await this.navCtrl.navigateBack('/tabs/tab2');
  }

  return() {
    this.navCtrl.navigateBack('/tabs/tab2');
  }
}
