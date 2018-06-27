declare let require: any;

import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CarouselItemList } from './carousel-item-list';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements AfterViewInit {
  itemList = CarouselItemList;

  container: HTMLElement;
  itemsWrapper: HTMLElement;
  carouselItems: Array<HTMLElement>;
  leftBtn: HTMLInputElement;
  rightBtn: HTMLInputElement;

  itemWidth: number;
  visibleCount: number;
  currentStep: number;

  constructor() { }

  ngAfterViewInit() {
    this.container = document.querySelector('.image-carousel');
    this.itemsWrapper = document.querySelector('.image-carousel__inner-wrapper');
    this.carouselItems = [].slice.apply(document.getElementsByClassName('image-carousel__item'));
    this.leftBtn = document.querySelector('.image-carousel__left-button');
    this.rightBtn = document.querySelector('.image-carousel__right-button');

    this.OnResize();
  }

  Move(direction) {
    if (direction == 'left') {
      this.currentStep--;

      this.itemsWrapper.style["left"] = `${
        parseInt(this.itemsWrapper.style.left, 10) + this.itemWidth
        }px`;

    } else if (direction == 'right') {
      this.currentStep++;

      this.itemsWrapper.style["left"] = `${
        parseInt(this.itemsWrapper.style.left, 10) - this.itemWidth
        }px`;
    }
  }

  AdjustWrapperWidth() {
    this.itemsWrapper.style.width = `${

      this.carouselItems.reduce((sum, element) => {
        return sum + element.offsetWidth;
      }, 0)

    }px`;
  }

  ArrangeTheButtons() {
    this.leftBtn.classList.add('appeared');
    this.rightBtn.classList.add('appeared');

    if (this.currentStep == this.visibleCount)
      this.leftBtn.classList.remove('appeared');

    if (this.currentStep == this.carouselItems.length)
      this.rightBtn.classList.remove('appeared');
  }

  @HostListener('window:resize')
  OnResize() {
    this.AdjustWrapperWidth();
    this.itemWidth = this.carouselItems[0].offsetWidth;
    this.visibleCount = Math.floor(this.container.offsetWidth / this.itemWidth);
    this.currentStep = this.visibleCount;
    this.itemsWrapper.style.left = '0px';
    this.ArrangeTheButtons();
  }

  onClick(direction: string) {
    this.Move(direction);
    this.ArrangeTheButtons();
  }

  makeImagePath(imageName: string) {
    return require('./images/' + imageName);
  }
}
