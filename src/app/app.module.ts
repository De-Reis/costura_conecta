import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { HomeComponent } from './features/pages/home/home.component';
import { SearchComponent } from './features/pages/search/search.component';
import { WorksComponent } from './features/pages/works/works.component';
import { RegisterComponent } from './features/pages/register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { CardDetailsComponent } from './features/pages/card-details/card-details.component';
import { PhonePipe } from './shared/pipes/phone.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { CardWorksComponent } from './shared/components/card-works/card-works.component';
import { CardSearchComponent } from './shared/components/card-search/card-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    WorksComponent,
    RegisterComponent,
    CardDetailsComponent,
    PhonePipe,
    CardWorksComponent,
    CardSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
