import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { AttemptComponent } from './attempt/attempt.component';
import { LogsComponent } from './logs/logs.component';
import {LogInterceptor} from "../log.interceptor";
import { LogPipe } from './log.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    GameboardComponent,
    AttemptComponent,
    LogsComponent,
    LogPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
