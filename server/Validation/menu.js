import joi from "joi";

export const ValidateMenuId = (menuid) => {
    const Schema = joi.object({
        _id :joi.array().items(joi.string).required(),
    })

    return Schema.validateAsync(menuid);
};

