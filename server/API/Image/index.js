// Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

// Database modal
import { ImageModel } from "../../database/allModels";

//Vlaidation
import { ValidateRestaurantUploadImage } from "../../Validation/image";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route     /
Des       Uploads given image to S3 bucket, and saves file link to mongodb
Params    none
Access    Public
Method    POST  
*/
Router.get("/:_id", async(req, res) => {
  try{
      const image  = await ImageModel.findById(req.params._id);

      return res.json({image});
  }catch(error) {
    return res.status(500).json({error: error.message });
  }
});

/*
Route     /
Des       Uploads given image to S3 bucket, and saves file link to mongodb
Params    none
Access    Public
Method    POST  
*/
Router.post("/", upload.single("file"), async (req, res) => {
  try {
    await ValidateRestaurantUploadImage(req.file);

    const file = req.file;

    // s3 bucket options
    const bucketOptions = {
      Bucket: "my-web-bucket1",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };

    const uploadImage = await s3Upload(bucketOptions);

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;