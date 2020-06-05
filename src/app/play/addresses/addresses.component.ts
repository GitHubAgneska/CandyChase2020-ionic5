import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { Coords } from 'leaflet';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {

  public addressList$: Coords[];

  constructor(
    private userStatsService: UserStatsService
  ) { }

  ngOnInit() {
    this.initAddressList();
  }

  public initAddressList() {
    // this.addressList$ = this.userStatsService.getCurrentAddressesList();

  }

}
