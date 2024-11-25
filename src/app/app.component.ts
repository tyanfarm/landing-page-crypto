import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private translate: TranslateService, private meta: Meta, private title: Title) {
    translate.setDefaultLang('en');
    this.meta.addTags([
      {name: 'description', content: 'Download our app to detect chart and candlestick patterns, predict market trends, and invest smarter in cryptocurrency trading.'},
      {name: 'robots', content: 'index, follow'},
      {name: 'revisit-after', content: '1 days'},
      {httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8'},
      {httpEquiv: 'Content-Language', content: 'en'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'google', content: 'nositelinkssearchbox'},
      {name: 'author', content: 'Nguyen Viet Hung'},
      {name: 'keywords', content: 'AI, Chart Pattern, Scanner, Technical Analysis, Stock Market, Forex, Cryptocurrency, Trading, Investment'},
      {name: 'og:title', content: 'AI Chart Pattern Scanner'},
      {name: 'og:description', content: 'Download our app to detect chart and candlestick patterns, predict market trends, and invest smarter in cryptocurrency trading.'},
      {name: 'og:image', content: ''},
      {name: 'og:url', content: ''},
      {name: 'og:site_name', content: 'AI Chart Pattern Scanner'},
      {name: 'og:type', content: 'article'},
      {name: 'og:locale', content: 'en_US'},
      {name: 'twitter:card', content: 'summary_large_image'}, 
      {name: 'twitter:site', content: ''},
      {name: 'twitter:title', content: 'AI Chart Pattern Scanner'},
      {name: 'twitter:description', content: 'Download our app to detect chart and candlestick patterns, predict market trends, and invest smarter in cryptocurrency trading.'},
      {name: 'twitter:image', content: ''},
    ]);
    this.title.setTitle('Home Page of AI Chart Pattern Scanner');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  // Listen event emitted from header component & transmit to HomeComponent throw routerOutletComponent
  @ViewChild(RouterOutlet) outlet!: RouterOutlet;

  scrollToSection(sectionId: string) {
    // Access component in router-outlet
    const activeComponent = this.outlet?.component;

    if (activeComponent instanceof HomeComponent) {
      activeComponent.scrollToSection(sectionId);
    }
  }
  
}
