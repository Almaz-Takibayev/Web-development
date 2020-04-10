import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdvertisementsComponent} from './advertisements/advertisements.component';
import {AdvertisementDetailComponent} from './advertisement-detail/advertisement-detail.component';
import {ProfileComponent} from './profile/profile.component';
import {MyAdvertisementsComponent} from './my-advertisements/my-advertisements.component';



const routes: Routes = [
  { path: 'advertisements', component: AdvertisementsComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'advertisements/detail/:id', component: AdvertisementDetailComponent },
  { path: 'my-advertisements', component: MyAdvertisementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
