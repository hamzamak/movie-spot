import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

const routes: Routes = [
  {path : '' , component  : HomeComponent},
  {path : 'details/:mediaType/:id' , component  : DetailsComponent},
  {path : 'search/:query' , component  : SearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
