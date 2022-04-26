import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { Tab4Page } from './tab4.page';
import { TaskComponent } from '../components/task/task.component';
import { GoalComponent } from '../components/goal/goal.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AchievementsComponent } from '../components/achievements/achievements.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [Tab4Page, TaskComponent, GoalComponent, AchievementsComponent]
})
export class Tab4PageModule {}
