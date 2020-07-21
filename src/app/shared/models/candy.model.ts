import { CandyI, CandyChecklistI } from './candy.interface';

/* tslint:disable */

export class Candy implements CandyI {
    
    _id = '';

    product_name = 'no_name';
    generic_name_fr ? = 'no_img_url';
    image_front_url ? = 'no_url';
    amountInBackpack ? = 0;

    brands_tags ?  = [];
    ingredients_tags ? = [];
    ingredients_text_fr = '';
    nutriscore_data ? = {};
    additives_tags ? = [];
    allergens_hierarchy ? = [];
    labels ? = '';
    labels_hierarchy? = [];

    candyChecklist ? = CandyChecklist;

    constructor(fields?: Partial<Candy>)  {
        if (fields) {
            Object.assign(this, fields);
        }
    }
}


export class CandyChecklist implements CandyChecklistI {

    additives = false;
    preservatives = false;
    organic = false;
    glutenFree = false;
    vegan = false;
    vegetarian = false;

}
