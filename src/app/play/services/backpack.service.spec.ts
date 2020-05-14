import { TestBed, async } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { BackpackService } from './backpack.service';
import { CandyI } from 'src/app/shared/models/candy.interface';
import { BackpackComponent } from '../backpack/backpack.component';

const stubComponent = {}

describe('BackpackService', () => {

    let backpackService: BackpackService;
    // let stubComponent:BackpackComponent;
    // let itemsInBackpack: CandyI[];


    beforeEach(() => TestBed.configureTestingModule({
        providers: [BackpackService ]
    }));

    it('should be created', () => {
        const service: BackpackService = TestBed.get(BackpackService);
        expect(service).toBeTruthy();
    });
});


// testing behavior subjects :
// https://github.com/ReactiveX/rxjs/blob/master/spec/subjects/BehaviorSubject-spec.ts

/* it('#getCurrentBackpack should return a list of candy', async(() => {
    const service: BackpackService = TestBed.get(BackpackService);
    const mockBackpackItems = [
        { _id: '1', product_name: 'testName1' },
        { _id: '2', product_name: 'testName2' }
    ];
    let data = service.getCurrentBackpack().subscribe();
    expect(data).toEqual(mockBackpackItems);
})); */

/* it('#update_backpack should change backpack array', async(() => {
    const service: BackpackService = TestBed.get(BackpackService);
    const mockPreviousBackpackItems = [
        { _id: '1', product_name: 'testName1' },
        { _id: '2', product_name: 'testName2' }
    ];
    const mockNewBackpackItems = [
        { _id: '3', product_name: 'testName3' }
    ];
    service.update_backpack(mockNewBackpackItems);
    let data = service.getCurrentBackpack();
    expect(data).toEqual(mockPreviousBackpackItems.concat(mockNewBackpackItems));
})); */
