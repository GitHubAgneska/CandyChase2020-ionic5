export interface CandyI {

    _id: string | number;
    product_name: string;
    generic_name_fr?: string;
    image_front_url?: string;
    amountInBackpack?: number;

    brands_tags?: any[];
    ingredients_tags?: any[]; // display list in english
    ingredients_text_fr?: string; // fr list version  (more accurate)
    nutriscore_data?: {};
    additives_tags?: any[];
    allergens_hierarchy?: any[];
    labels?: string; // check for organic tags
    labels_hierarchy?: any[]; // check for organic tags

    candyChecklist?: {};
}


export interface CandyChecklistI {

    additives: boolean;
    preservatives: boolean;
    organic: boolean;
    glutenFree: boolean;
    vegan: boolean;
    vegetarian: boolean;

}
