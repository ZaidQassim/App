import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { CorporationListComponent } from './corporation/corporation-list/corporation-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderContentPageComponent } from './header-content-page/header-content-page.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { BookComponent } from './book/book/book.component';


@NgModule({
  declarations: [										
    AppComponent,
    NavBarComponent,
      NotificationsComponent,
      SidebarComponent,
      LoginComponent,
      CorporationListComponent,
      PageNotFoundComponent,
      HomeComponent,
      HeaderContentPageComponent,
      CorporationListComponent,
      DepartmentListComponent,
      UserListComponent,
      BookComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
