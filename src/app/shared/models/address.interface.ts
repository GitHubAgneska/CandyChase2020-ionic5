export interface AddressI {

    addressId?: number;
    title?: string;
    description?: string;
    coords: { lat: number, long: number };
    imageUrl?: string;

}
