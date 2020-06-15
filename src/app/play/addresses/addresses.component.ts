import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { Coords } from 'leaflet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {

  public addressList$: Observable<any[]>;

  public addressList: any[];
  public address: any = {};
  public addressCoords: any = {};

  public noAddressYet: boolean;
  public noAddressBubble = 'assets/graphicMat/noAddressYet_bubble.png';


  constructor(
    private userStatsService: UserStatsService
  ) {
    this.addressList = [];
    this.addressCoords = { lat: 0, long: 0 };
    this.noAddressYet = true;
  }

  ngOnInit() {

    this.userStatsService.getCurrentAddressesList().subscribe(data => {
      this.addressList.push(data);
      console.log('ADDRESSLIST PUSH==', this.addressList);
      if (this.addressList.length === 0 ) {
        this.noAddressYet = true;
      }
    });
  }
}
