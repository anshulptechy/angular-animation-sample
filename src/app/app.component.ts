import { Component, ElementRef } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'test-task-cashflow-UI';
  options: AnimationOptions = {
    path: '/assets/bodymovin/home/display_1/1_dispay_home.json',
  };
  option: AnimationOptions = {
    path: '/assets/bodymovin/home/display_2/home_2_display.json',
  };
  constructor(private elementRef: ElementRef) {
    debugger;
     console.log(this.options);
  }
  animationCreated(animationItem: AnimationItem): void {
    debugger;
    console.log(animationItem);
  }
}
