//Libraries
import express from "express";
import passport from "passport";


//Database model
import { MenuModel, ImageModel } from "../../database/allModels";

//Validation
import { ValidateMenuId } from "../../Validation/menu";
import { ValidateRestaurantUploadImage } from "../../Validation/image";
const Router = express.Router();

/*
Route     /list
Des       Get all list menu based on id
Params    _id
Access    Public
Method    GET
*/

Router.get("/list/:_id", async(req,res) => {
    try {
        // await ValidateMenuId( req.params)

        const { _id } = req.params;
        const menus = await MenuModel.findById(_id);
        return res.json({ menus });
    } catch (error) {
       return res.status(500).json({error: error.message});
    }
});

/*
Route     /image
Des       Get all  menu images based on id
Params    _id
Access    Public
Method    GET
*/

Router.get("/image/:id", async(req,res) => {
    try {
        await ValidateRestaurantUploadImage(req.params);

        const { _id } = req.params;
        const menus = await ImageModel.findOne(_id);
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;