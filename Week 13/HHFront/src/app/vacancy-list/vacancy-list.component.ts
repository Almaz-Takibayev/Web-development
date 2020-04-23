import { Component, OnInit } from '@angular/core';
import {Company, Vacancy} from '../models';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyId: string;
  constructor(private providerService: ProviderService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.companyId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getVacanciesByCompany(this.companyId);
  }
  getVacanciesByCompany(id: string) {
    this.providerService.getVacanciesByCompanies(id)
      .subscribe(vacancies => {
        this.vacancies = vacancies;
      });
  }
}
