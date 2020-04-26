import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {User, UserProfile} from '../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile;

  constructor(private route: ActivatedRoute, private mainService: MainService, private location: Location) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.mainService.getMyProfile().subscribe(user => this.userProfile = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.mainService.updateMyProfile(this.userProfile)
      .subscribe(() => this.goBack());
  }
}
