import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { SidePanel } from './layout/side-panel/side-panel';
import { NavigatioBar } from './layout/header/navigatio-bar/navigatio-bar';
import { httpAuthInterceptor } from './core/http-auth.interceptor';
import { Auth } from './auth/auth';


@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    SidePanel,
    NavigatioBar,
    Auth
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OAuthModule.forRoot()
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([httpAuthInterceptor])
    ),
  ],
  bootstrap: [App]
})
export class AppModule { }
