import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { InfoboxComponent } from './infobox/infobox.component';
import { ProgressComponent } from './progress/progress.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    ContentHeaderComponent,
    InfoboxComponent,
    ProgressComponent,
    SidebarComponent
  ],
  imports: [CommonModule],
  exports: [
    InfoboxComponent,
    ContentHeaderComponent,
    ProgressComponent,
    SidebarComponent
  ]
})
export class WidgetsModule {}
