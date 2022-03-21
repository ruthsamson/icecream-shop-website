import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IcecreamComponent } from './icecream/icecream.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: 'icecream', component: IcecreamComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'reviews', component: ReviewsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


