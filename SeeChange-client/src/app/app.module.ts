import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';


import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule, MatToolbar,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SessionStorageService} from "./services/sessionstorage.service";
import {userLoginService} from "./services/userlogin.service";
import {HttpModule} from "@angular/http";
import { StreamItemComponent } from './stream-list/stream-item/stream-item.component';
import { StreamListComponent } from './stream-list/stream-list.component';
import {StreamService} from "./services/stream.service";
import {AuthGuard} from "./auth/auth-guard.service";
import {AuthService} from "./auth/auth.service";
import { StreamDetailComponent } from './stream-detail/stream-detail.component';
import {ImageCropperModule} from "ngx-image-cropper";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    StreamItemComponent,
    StreamListComponent,
    StreamDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatGridListModule,
    ImageCropperModule
  ],
  providers: [userLoginService, SessionStorageService, StreamService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
