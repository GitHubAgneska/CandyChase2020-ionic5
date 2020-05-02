import { NgModule } from '@angular/core';
import { KeysPipe } from './keys/keys';
import { KeyvaluePipe } from './keyvalue/keyvalue';
import { RemoveUnderscorePipe } from './remove-underscore/remove-underscore';
import { ShortenStringPipe } from './shorten-string/shorten-string';
import { RemoveCharsPipe } from './remove-chars/remove-chars';

@NgModule({
    declarations: [
        KeysPipe,
        KeyvaluePipe,
        RemoveUnderscorePipe,
        RemoveUnderscorePipe,
        ShortenStringPipe,
        RemoveCharsPipe],
    imports: [],
    exports: [KeysPipe,
        KeyvaluePipe,
        RemoveUnderscorePipe,
        RemoveUnderscorePipe,
        ShortenStringPipe,
        RemoveCharsPipe]
})
export class PipesModule { }
