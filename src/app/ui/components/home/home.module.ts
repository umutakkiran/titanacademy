import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { EntranceComponent } from './entrance/entrance.component';
import { DescriptionComponent } from './description/description.component';
import { EducationComponent } from './education/education.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    EntranceComponent,
    DescriptionComponent,
    EducationComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component: HomeComponent}
    ])
  ],
  exports: [
    HomeComponent,
    BannerComponent,
    EntranceComponent,
    DescriptionComponent,
    EducationComponent,
    TeamComponent

  ]
})
export class HomeModule { }
