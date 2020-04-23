import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';
import {Vacancy} from '../models';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent implements OnInit {
  vacancy: Vacancy;
  vacancyId: string;
  constructor(private providerService: ProviderService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.vacancyId = params.get('vacancyId');
    });
  }

  ngOnInit(): void {
    this.getVacancyById(this.vacancyId);
  }
  getVacancyById(id: string) {
    this.providerService.getVacancyById(id)
      .subscribe(vacancy => {
        this.vacancy = vacancy;
      });
  }
}
