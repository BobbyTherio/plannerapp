import { Component, Input, OnInit } from '@angular/core';
import { Igoal } from 'src/app/interfaces/igoal';
import { Itask } from 'src/app/interfaces/itask';
import { GoalService } from 'src/app/services/goal.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {

  @Input() goal!:Igoal;
  @Input() task!:Itask;

  constructor(private goalService: GoalService, private taskService: TaskService) { }

  ngOnInit() {}
}
