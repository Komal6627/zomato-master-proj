import joi from "joi";

//restaurent
export const ValidateRestaurantId = (resId) => {
    const Schema = joi.object({
        _id: joi.string().required(),
    });

    return Schema.validateAsync(resId);
};

//category
export const ValidateCategory = (category) =>{
    const Schema = joi.object({
        category: joi.string().required(),
    });

    return Schema.validateAsync(category);
};