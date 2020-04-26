import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdvertisementsComponent} from './advertisements/advertisements.component';
import {AdvertisementDetailComponent} from './advertisement-detail/advertisement-detail.component';
import {ProfileComponent} from './profile/profile.component';
import {MyAdvertisementsComponent} from './my-advertisements/my-advertisements.component';
import {MyAdvertisementDetailComponent} from './my-advertisement-detail/my-advertisement-detail.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {MyAdvertisementAddComponent} from './my-advertisement-add/my-advertisement-add.component';



const routes: Routes = [
  { path: 'advertisements', component: AdvertisementsComponent },
  { path: 'myprofile', component: ProfileComponent },
  { path: 'advertisements/:id', component: AdvertisementDetailComponent },
  { path: 'my-advertisements', component: MyAdvertisementsComponent },
  { path: 'my-advertisements/add', component: MyAdvertisementAddComponent },
  { path: 'my-advertisements/:id', component: MyAdvertisementDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', redirectTo: 'advertisements', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
