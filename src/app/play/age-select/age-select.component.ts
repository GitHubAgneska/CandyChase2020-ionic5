import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-age-select',
  templateUrl: './age-select.component.html',
  styleUrls: ['./age-select.component.scss'],
})
export class AgeSelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  setAge() {
    this.router.navigate(['/tabs']);

  }

}
