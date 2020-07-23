import { Component, OnInit } from '@angular/core';
import { UserStatsService } from '../../shared/services/user-stats.service';
import { Coords } from 'leaflet';
import { Observable } from 'rxjs';
import { AddressI } from '../../shared/models/address.interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {

  public addressList$: Observable<any[]>;

  public addressList: AddressI[];
  public address: Partial<AddressI>;
  public addressCoords: any = {};

  public listIsEmpty: boolean;
  public noAddressBubble = 'assets/graphicMat/noAddressYet_bubble.png';

  public plusBtn = 'assets/graphicMat/zoomIn.png';
  public minusBtn = 'assets/graphicMat/zoomOut.png';

  constructor(
    private userStatsService: UserStatsService,
    public alertController: AlertController
  ) {
    this.addressList = [];
    this.addressCoords = { lat: 0, long: 0 };
    this.listIsEmpty = false;
  }

  ngOnInit() {

    this.userStatsService.getCurrentAddressesList().subscribe((data: AddressI[]) => {
      // console.log('RAW==', data);
      this.addressList = data;
      // console.log('ADDRESS lIST==', this.addressList);
      if (this.addressList.length === 0) {
        this.listIsEmpty = true;
      }
    });
  }

  removeAddress(address: AddressI) {
    this.address = address;

    this.presentConfirmDelete().then(res => {
      if (res === 'del') {
        this.addressList = this.addressList.filter(items => items.addressId !== this.address.addressId);
      }
    });
    this.userStatsService.updateCurrentAddressesList(this.addressList);
    // console.log('address list after delete=', this.addressList);
  }


  async presentConfirmDelete(): Promise<any> {
    return new Promise(async (resolve) => {

      const alert = await this.alertController.create({
        cssClass: 'dialog',
        header: 'Are you sure?',
        subHeader: 'Do you really want to delete this address?',
        buttons: [
          {
            text: 'Delete',
            role: 'delete',
            handler: (del) => {
              resolve('del');
            }
          },
          {
            text: 'No!',
            role: 'don(t delete',
            handler: (no) => {
              resolve('del');
            }
          },
        ]
      });
      alert.present();
    });
  }


}

