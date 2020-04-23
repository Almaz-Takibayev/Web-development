import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CompanyService} from "../company.service";
import {Company} from "../models";

@Component({
  selector: 'app-news-page',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.companyService.getCompany(id).subscribe(company => this.company = company);
  }

}
