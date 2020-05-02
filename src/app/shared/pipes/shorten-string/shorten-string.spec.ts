import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShortenStringPipe } from 'src/app/shared/pipes/shorten-string/shorten-string';

describe('Pipe: ShortenStringPipe', () => {
    let pipe: ShortenStringPipe;

    beforeEach(() => {
        pipe = new ShortenStringPipe();
    });
});

it('should truncate a string if its too long (>20)', () => {
    // Arrange
    const pipe = new ShortenStringPipe();

    // Act
    const ret = pipe.transform('1234567890123456789012345', 20);

    // Assert
    expect(ret.length).toBeLessThanOrEqual(20);
});

