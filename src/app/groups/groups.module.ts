
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupsRoutingModule } from './groups.routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    GroupsComponent
  ],
  providers: [],
})
export class GroupsModule { }
