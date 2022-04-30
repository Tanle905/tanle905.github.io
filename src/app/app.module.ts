import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserDetailComponent } from './admin/user-list/user-detail/user-detail.component';
import { HeaderComponent } from './admin/header/header.component';
import { UserEditComponent } from './admin/user-list/user-detail/user-edit/user-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAddComponent } from './admin/user-add/user-add.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderByPipe } from './order-by.pipe';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LoginFailedModalComponent } from './login/login-failed-modal/login-failed-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    HeaderComponent,
    UserEditComponent,
    UserAddComponent,
    OrderByPipe,
    LoginComponent,
    AdminComponent,
    LoginFailedModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
