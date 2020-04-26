import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../models';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  companies: Company[] = [];

  name = ''
  description = ''
  city = ''
  address = ''

  constructor(public companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList() {
    this.companyService.getCompanyList()
      .subscribe(companies => {
        this.companies = companies;
      });
  }

  addCompany(name, description, city, address) {
    this.companyService.addCompany(name, description, city, address)
      .subscribe(company => {
        this.companies.push(company);
      });
    return this.getCompanyList();
  }

  deleteCompany(id) {
    this.companyService.deleteCompany(id).subscribe(res => {
       this.companies = this.companies.filter(c => c.id != id);
       this.getCompanyList();
    });
  }

}
