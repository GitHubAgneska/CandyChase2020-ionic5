import { TestBed, async } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { BackpackService } from './backpack.service';
import { CandyI } from 'src/app/shared/models/candy.interface';


describe('BackpackService', () => {

    let backpackService: BackpackService;

    beforeEach(() => TestBed.configureTestingModule({
        providers: [ BackpackService ]
    }));
    backpackService = TestBed.get(BackpackService);

    it('should be created', () => {
        const service: BackpackService = TestBed.get(BackpackService);
        expect(service).toBeTruthy();
    });

    // testing behavior subjects :
    // https://github.com/ReactiveX/rxjs/blob/master/spec/subjects/BehaviorSubject-spec.ts

});


