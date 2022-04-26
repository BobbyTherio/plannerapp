import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  addTask : FormGroup = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    date_of_start : new FormControl('', [Validators.required]),
    date_of_end : new FormControl('', [Validators.required]),
    status : new FormControl('pending', [Validators.required])
  });

  constructor(private toastCtrl: ToastController, private navCtrl: NavController, private taskService: TaskService) { }

  ngOnInit() {
  }

  async add_task() {
    this.taskService.createTask(this.addTask.value).subscribe(() => {
      this.addTask.reset();
    });
    const toast = await this.toastCtrl.create({
      message: 'New task added successfully',
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
    await this.navCtrl.navigateBack('/tabs/tab1');
  }

  return() {
    this.navCtrl.navigateBack('/tabs/tab1');
  }
}
