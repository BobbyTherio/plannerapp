import { Component, Input, OnInit } from '@angular/core';
import { Igoal } from 'src/app/interfaces/igoal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {

  @Input() goal!: Igoal;

  constructor(private goalService: GoalService) { }

  ngOnInit() {}

  checkboxClickGoal() {
    console.log(this.goal.name)
    console.log(this.goal.status)
    this.goal.status = "completed"
    console.log(this.goal.status)
    console.log(this.goal.id)
    this.goalService.updateGoal(this.goal.id, this.goal).subscribe(() =>{
      alert('Goal was updated')
    });
  }
}
