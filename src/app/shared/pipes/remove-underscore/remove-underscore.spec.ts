import { RemoveUnderscorePipe } from 'src/app/shared/pipes/remove-underscore/remove-underscore';

describe('Pipe: RemoveUnderscorePipe', () => {
    let pipe: RemoveUnderscorePipe;

    beforeEach(() => {
        pipe = new RemoveUnderscorePipe();
    });
});

it('should remove unwanted underscore in string', () => {
    // Arrange
    const pipe = new RemoveUnderscorePipe();

    // Act
    const ret = pipe.transform('my_ingredients');

    // Assert
    expect(ret).toEqual('my ingredients');

});
