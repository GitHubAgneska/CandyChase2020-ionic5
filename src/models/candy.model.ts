import { CandyI, CandyChecklistI } from './candy.interface';

export class Candy implements CandyI {

    _id = '';
    product_name = 'no_name';
    generic_name_fr ? = 'no_img_url';
    image_front_url ? = 'no_url';
    amountInBackpack ? = 0;

    brands_tags ?  = [];
    ingredients_tags ? = [];
    nutriscore_data ? = {};
    additives_tags ? = [];
    allergens_hierarchy ? = [];
    labels ? = '';

    candyChecklist ? = CandyChecklist;

    constructor(fields?: Partial<CandyI>)  {
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
