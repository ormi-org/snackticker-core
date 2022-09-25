import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackticketUiModule } from '@snackticket-core/snackticket-ui';
import { StartupComponent } from './startup/startup.component';

@NgModule({
  declarations: [StartupComponent],
  imports: [CommonModule, SnackticketUiModule],
  exports: [StartupComponent]
})
export class ViewModule {
  
}
