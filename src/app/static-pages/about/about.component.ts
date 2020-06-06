import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor(private location: Location) { }

  public logoImg = 'assets/graphicMat/app_logo.png';
  public pumpkinShape = 'assets/graphicMat/menu_shape1.png';

  ngOnInit() {}

  public goBack() {
    this.location.back();
  }

}
