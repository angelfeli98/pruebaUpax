
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './users.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
})
export class UsersModule {}
