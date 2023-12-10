import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { BadgeComponent } from './badge/badge.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { HighlightComponent } from './highlight/highlight.component';
import { DetailPostComponent } from './detail-post/detail-post.component';



@NgModule({
  declarations: [
    ImageComponent,
    BadgeComponent,
    ThumbnailComponent,
    TabsComponent,
    TabComponent,
    HighlightComponent,
    DetailPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageComponent,
    BadgeComponent,
    ThumbnailComponent,
    TabsComponent,
    TabComponent,
    HighlightComponent
  ]
})
export class SharedModule { }
