import { Component, OnInit } from '@angular/core';
import { CandyApiService } from '../services/candy-api.service';
import { CandyI, CandyChecklistI } from '../../shared/models/candy.interface';
import { ShortenStringPipe } from 'src/app/shared/pipes/shorten-string/shorten-string';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-candy-list',
  templateUrl: './candy-list.component.html',
  styleUrls: ['./candy-list.component.scss'],
})
export class CandyListComponent implements OnInit {

  constructor(
    private candyApiService: CandyApiService,
    public shortenString: ShortenStringPipe ) { }

  public candyList: CandyI[];
  loading: boolean;

  ngOnInit() {
    this.loading = true;
    this.candyApiService.getAllCandyFromApi()
      .subscribe(
        (response: CandyI[]) => {
          this.candyList = response;
          console.log(this.candyList);
          this.loading = false;
        }
      );
  }

}
