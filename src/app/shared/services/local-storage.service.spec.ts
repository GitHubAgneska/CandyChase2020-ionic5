import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  const storageName = localStorage;
  const storedDataMock = [ {}, {}, {}];

  it('should be created', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    expect(service).toBeTruthy();
  });
  it('#setStoredData should save data to local storage', () => {});
  it('#sgetStoredData should retrieve data from local storage', () => {});
  it('#clearStoredData should remove targeted data from local storage', () => {});
  it('#cleanAll should remove all data from local storage', () => {});
});
