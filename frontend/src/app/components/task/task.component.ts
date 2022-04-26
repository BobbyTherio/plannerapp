import { Component, Input, OnInit } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task!: Itask;
  
  constructor(private taskService: TaskService) { }

  ngOnInit() {}

  checkboxClickTask() {
    console.log(this.task.name)
    console.log(this.task.status)
    this.task.status = "completed"
    console.log(this.task.status)
    console.log(this.task.id)
    this.taskService.updateTask(this.task.id, this.task).subscribe(() =>{
      alert('Task was updated')
    });
  }
}
