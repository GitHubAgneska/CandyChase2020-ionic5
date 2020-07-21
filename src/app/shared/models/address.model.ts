import { AddressI } from "./address.interface";


export class Address implements AddressI {

    addressId = 0;
    title ? = '';
    description ? = '';
    lat = 0;
    long = 0;
    // coords: { lat: number, long: number };
    imageUrl ? = '';
    timestamp = 0;
}
