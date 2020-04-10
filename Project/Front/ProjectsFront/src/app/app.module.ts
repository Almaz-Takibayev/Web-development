import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { AdvertisementDetailComponent } from './advertisement-detail/advertisement-detail.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { MyAdvertisementsComponent } from './my-advertisements/my-advertisements.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementsComponent,
    AdvertisementDetailComponent,
    HeaderComponent,
    ProfileComponent,
    MyAdvertisementsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports: [
    HeaderComponent,
    AdvertisementsComponent,
    AdvertisementDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
