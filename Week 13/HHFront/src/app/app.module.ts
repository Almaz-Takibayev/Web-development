import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompaniesListComponent} from './companies-list/companies-list.component';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './auth.interceptor';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesListComponent,
    CompanyDetailComponent,
    VacancyListComponent,
    VacancyDetailComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
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
