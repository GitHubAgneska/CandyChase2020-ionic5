import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
})
export class LegalComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {}

  public goBack() {
    this.location.back();
  }

}
