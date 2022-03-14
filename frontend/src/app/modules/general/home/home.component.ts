import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private meta: Meta,
    private titleService: Title) {
    this.features =
      [
        {
          type: 'Bootstrap',
          description: 'la vache',
          image: 'demo-bootstrap-prototype.png',
          link: 'bootstrap'
        },
        {
          type: 'Reactive Form',
          description: 'Le mouton',
          image: 'demo-reactive-forms.png',
          link: 'reactive-form'
        },
        {
          type: 'Services',
          description: 'La chèvre',
          image: 'demo-services-playlist-youtube.png',
          link: 'services'
        },
        {
          type: 'Components',
          description: 'Le chat',
          image: 'demo-components.png',
          link: 'components'
        },
        {
          type: 'HttpClient',
          description: 'Un Chien',
          image: 'demo-httpclient.png',
          link: 'httpclient'
        },
        {
          type: 'Template Driven Forms',
          description: 'Un cheval',
          image: 'demo-template-driven-forms.png',
          link: 'template-driven-forms'
        },
      ];

  }

  ngOnInit(): void {

    this.loadScript('assets/params/js/index.js');

    this.titleService.setTitle('angular.ganatan: Une Application Web avec Angular');
    this.meta.addTag({
      name: 'author',
      content: 'danny ganatan'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 12.2.12 et bootstrap 5.1.3' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }

  loadScript(name: string): void {

    if (isPlatformBrowser(this.platformId)) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = name;
      s.async = false;
      document.getElementsByTagName('head')[0].appendChild(s);
    }
  }


}
