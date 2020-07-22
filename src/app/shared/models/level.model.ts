import { LevelI } from './level.interface';

export class Level implements LevelI {

    idLevel ?= 0;
    levelName = '';
    levelImg = '';
    bannerMessage ? = '';
    levelCard = '';
    levelCardName ? = '';
    isActive ? = false;
    isNext ? = false;

}
