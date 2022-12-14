import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page.component';

const routes: Routes = [
  { path: '', component: DetailsPageComponent },
]

@NgModule({
  declarations: [
    MainComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsPageModule { }
