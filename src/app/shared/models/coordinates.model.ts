import { CoordinatesI } from '../models/coordinates.interface';

export class Coordinates implements CoordinatesI {
    coords = {
        accuracy: 42,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 0,
        longitude: 0,
        speed: null,
    };
}
