import { KeyvaluePipe } from 'src/app/shared/pipes/keyvalue/keyvalue';

describe('Pipe: KeyvaluePipe', () => {
    let pipe: KeyvaluePipe;

    beforeEach(() => {
        pipe = new KeyvaluePipe();
    });
});

it('should transform Object or Map into an array of key value pairs', () => {
    // Arrange
    const pipe = new KeyvaluePipe();

    // Act
    const ret = pipe.transform({ grade: 'e', energy: 2506, sodium_points: 0 });

    // Assert
    expect(ret).toEqual([{ key: 'grade', value: 'e' }, { key: 'energy', value: 2506 }, { key: 'sodium_points', value: 0 }]);

});
