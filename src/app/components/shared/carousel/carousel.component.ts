import { AfterViewInit, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  // templateUrl: './carousel.component.html',
  templateUrl: './carousel.component.pug',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements AfterViewInit {
  ngAfterViewInit() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 1 }); 

    elements.forEach((el) => observer.observe(el));
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 24,
    animateIn: 'slideIn',
    animateOut: 'fadeOut',
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 10,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      }, 
      740: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
    nav: false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false
  }

  slideList = [
    {
      img: "assets/images/carousel/default.jpg",
      title: "News Review",
      description: "News Review",
    },
    {
      img: "assets/images/carousel/test.jpg",
      title: "News Review",
      description: "News Review",
    },
    {
      img: "assets/images/carousel/test1.jpg",
      title: "News Review",
      description: "News Review",
    },
    {
      img: "assets/images/carousel/test2.jpg",
      title: "News Review",
      description: "News Review",
    },
    {
      img: "assets/images/carousel/test.jpg",
      title: "News Review",
      description: "News Review",
    },
  ]

  

}
