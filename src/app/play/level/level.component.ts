import { Component, OnInit } from '@angular/core';
import { LevelI } from 'src/app/shared/models/level.interface';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {

  public currentLevel: LevelI;
  public nextLevel: LevelI;

  constructor() { }

  ngOnInit() {
    this.setLevel();
  }

  public setLevel() {}

  public goToMyCards() {}

}
