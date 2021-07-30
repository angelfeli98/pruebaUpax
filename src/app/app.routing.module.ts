
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guard/auth.guard';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: (): Promise<any> => import('./home/home.module').then( module => module.HomeModule ),
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    loadChildren: (): Promise<any> => import('./users/users.module').then( module => module.UsersModule ),
    pathMatch: 'full'
  },
  {
    path: 'grupos',
    loadChildren: (): Promise<any> => import('./groups/groups.module').then( module => module.GroupsModule ),
    pathMatch: 'full'
  },
  {
    path: ':otraRuta',
    canActivate: [ AuthGuard ],
    component: HomeComponent
  },
  {
    path: '',
    canActivate: [ AuthGuard ],
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule { }
