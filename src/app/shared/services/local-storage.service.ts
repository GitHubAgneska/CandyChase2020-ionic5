import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storageName = 'candyList';

  constructor() { }

  public setDataToStore(data: any) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  public getStoredData() {
    const storedData: any = localStorage.getItem(this.storageName);
    console.log('JSON.parse(storedData)==', JSON.parse(storedData));
    return JSON.parse(storedData);
  }

  public clearStoredData() {
    localStorage.removeItem(this.storageName);
  }

  public cleanAll() {
    localStorage.clear();
  }
}
