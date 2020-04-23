import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import {VacancyListComponent} from './vacancy-list/vacancy-list.component';
import {VacancyDetailComponent} from './vacancy-detail/vacancy-detail.component';



const routes: Routes = [
  { path: '', component: CompaniesListComponent },
  { path: 'company/:id', component: CompanyDetailComponent },
  { path: 'company/:id/vacancies', component: VacancyListComponent },
  { path: 'company/:id/vacancies/:vacancyId', component: VacancyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
