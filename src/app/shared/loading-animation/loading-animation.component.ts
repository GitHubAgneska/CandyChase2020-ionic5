import { Component } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.scss'],
})

export class LoadingAnimationComponent {

  public animation: Animation;

  constructor(private animationCtrl: AnimationController) {

    const animation: Animation = this.animationCtrl.create('loadingAnim')
      .addElement(document.querySelector('.cornCandy'))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '0', '0.2')
      .easing('ease-out');

    animation.play();
  }

}
