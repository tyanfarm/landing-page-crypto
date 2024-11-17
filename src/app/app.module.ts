import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NetworkComponent } from './components/network/network.component';
import { FeaturesComponent } from './components/features/features.component';
import { WhyComponent } from './components/why/why.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { BenefitsComponent } from './components/benefits/benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IntroductionComponent,
    NetworkComponent,
    FeaturesComponent,
    WhyComponent,
    CtaComponent,
    FooterComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
