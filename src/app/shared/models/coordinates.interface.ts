export interface CoordinatesI {

    coords: {
        accuracy: number;
        altitude: number;
        altitudeAccuracy: number;
        heading: number;
        latitude: number;
        longitude: number;
        speed: number;
    };
}


export interface Location {

    lat: number;
    lng: number;

}
