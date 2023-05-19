import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { SearchComponent } from './features/pages/search/search.component';
import { WorksComponent } from './features/pages/works/works.component';
import { RegisterComponent } from './features/pages/register/register.component';
import { CardDetailsComponent } from './features/pages/card-details/card-details.component';



const routes: Routes = [
  { path: "", component: HomeComponent},
  { path:"search", component: SearchComponent},
  { path:"works", component: WorksComponent},
  { path:"register", component: RegisterComponent},
  { path: "card-details/:cardId", component: CardDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
