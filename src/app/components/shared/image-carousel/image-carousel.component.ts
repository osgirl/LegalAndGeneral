import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  container;
  itemsWrapper: HTMLElement;
  carouselItems: Array<HTMLElement>;
  leftBtn: HTMLElement;
  rightBtn: HTMLElement;

  itemWidth: number;
  visibleCount: number;
  currentStep: number;

  // this.$leftBtn.on('click', function () {
  //   this.Move('left');
  //   this.ArrangeTheButtons();
  // });

  // this.$rightBtn.on('click', function () {
  //   this.Move('right');
  //   this.ArrangeTheButtons();
  // });


  constructor() { }

  ngOnInit() {
    this.container = document.querySelector('.image-carousel') as HTMLElement;
    this.itemsWrapper = document.querySelector('.image-carousel__inner-wrapper');
    this.carouselItems =[].slice.apply(document.getElementsByClassName('image-carousel__item'));
    this.leftBtn = document.querySelector('.image-carousel__left-button');
    this.rightBtn = document.querySelector('.image-carousel__right-button');

    this.OnResize();
  }

  Move(direction) {

    if (direction == 'left') {
      this.currentStep--;
      // this.itemsWrapper.style.left += this.itemWidth;
      console.log(this.itemsWrapper.style["left"] =`${
        parseInt(this.itemsWrapper.style.left, 10) + this.itemWidth
      }px`);
      
    } else if (direction == 'right') {
      this.currentStep++;
      console.log(this.itemsWrapper.style["left"] = `${
        parseInt(this.itemsWrapper.style.left, 10) - this.itemWidth
        }px`);
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
    console.log(this.currentStep);
    console.log(this.carouselItems.length);

    this.leftBtn.classList.add('appeared');
    this.rightBtn.classList.add('appeared');

    if (this.currentStep == this.visibleCount)
      this.leftBtn.classList.remove('appeared');

    if (this.currentStep == this.carouselItems.length)
      this.rightBtn.classList.remove('appeared');
  }

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


}
