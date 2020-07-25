import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { SmartAudioService } from '../shared/services/smart-audio.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  public imgCandyTitle = 'assets/graphicMat/title_candy.png';

  constructor(
    private router: Router,
    // public smartAudioService: SmartAudioService
    ) { }

  ngOnInit() {
    // this.smartAudioService.play('welcome');
  }

  start() {
    this.router.navigate(['/letsplay']);
  }

}
