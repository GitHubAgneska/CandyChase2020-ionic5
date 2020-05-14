import { RemoveCharsPipe } from 'src/app/shared/pipes/remove-chars/remove-chars';

describe('Pipe: RemoveCharsPipe', () => {
    let pipe: RemoveCharsPipe;

    beforeEach(() => {
        pipe = new RemoveCharsPipe();
    });
});

it('should remove 3 characters (en:) at the beginning of string', () => {
    // Arrange
    const pipe = new RemoveCharsPipe();

    // Act
    const ret = pipe.transform('en:ingredient');

    // Assert
    expect(ret).toEqual('ingredient');

});
