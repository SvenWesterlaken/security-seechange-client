import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbar,
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
import { StreamsComponent } from './streams/streams.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    StreamsComponent,
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
    HttpModule

  ],
  providers: [userLoginService, SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
