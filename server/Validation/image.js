import joi from "joi";

export const  ValidateRestaurantUploadImage = (restaurantimage) =>{
    const Schema = joi.object({
        file: joi.array().items(joi.string()),
    });

    return Schema.validateAsync(restaurantimage);
};