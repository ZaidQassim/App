import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book/book.component';
import { CorporationListComponent } from './corporation/corporation-list/corporation-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'corporationList',
    component: CorporationListComponent,
    pathMatch: 'full'
  },
  {
    path: 'departmentlist',
    component: DepartmentListComponent,
    pathMatch: 'full'
  },
  {
    path: 'userlist',
    component: UserListComponent,
    pathMatch: 'full'
  },
  {
    path: 'book',
    component: BookComponent,
    pathMatch: 'full'
  },  
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
