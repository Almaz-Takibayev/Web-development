import { BrowserModule } from '@angular/platform-browser';
import {ClassProvider, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { AdvertisementDetailComponent } from './advertisement-detail/advertisement-detail.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { MyAdvertisementsComponent } from './my-advertisements/my-advertisements.component';
import { MyAdvertisementDetailComponent } from './my-advertisement-detail/my-advertisement-detail.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderbeforeloginComponent } from './headerbeforelogin/headerbeforelogin.component';
import {AuthInterceptor} from './auth.interceptor';
import {MainService} from './main.service';
import { MyAdvertisementAddComponent } from './my-advertisement-add/my-advertisement-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementsComponent,
    AdvertisementDetailComponent,
    HeaderComponent,
    ProfileComponent,
    MyAdvertisementsComponent,
    MyAdvertisementDetailComponent,
    LoginComponent,
    SignUpComponent,
    HeaderbeforeloginComponent,
    MyAdvertisementAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
