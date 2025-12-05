import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    ($('.autoplay') as any).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
    });

    // jQuery UI Accordion
    ($('#accordion') as any).accordion({
      collapsible: true,
      heightStyle: 'content',
      icons: { "header": "arrow-down", "activeHeader": "arrow-up" }
    });

    // Wow.js
    if ((window as any).WOW) {
      new (window as any).WOW().init();
    }

  }


  constructor() { }

  ngOnInit(): void {
  }

}
