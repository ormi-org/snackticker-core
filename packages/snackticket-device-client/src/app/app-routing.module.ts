import { NgModule } from '@angular/core';
import { StartupComponent } from './view/startup/startup.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'startup',
    component: StartupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
