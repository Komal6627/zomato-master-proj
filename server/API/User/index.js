//Libraries
import express from "express";
import passport from "passport";
import { getUser } from "../../../client/src/Redux/Reducer/User/user.action";

//Database
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route     /
Des       Get user Data
Params    _id
Body      none
Access    Public
Method    GET
*/

Router.get("/",passport.authenticate("jwt"), async(req,res) => {
    try {
      //  const { _id } = req.params;
      //console.log(req.session.passport.user.doc);
        // const getUser = await UserModel.findById(_id);

        const { email, fullname, phoneNumber } = req.session.passport.user._doc;
       

        return res.json({user: { email, fullname, phoneNumber, address }});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
Route     /:_id
Des       Get user Data
Params    _id
Body      none
Access    Public
Method    GET
*/

Router.get("/:_id", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params._id);
      const { fullname } = user;
  
      return res.json({ user: { fullname } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

/*
Route     /update/:_id
Des       Update user id
Params    userId
Body      userData
Access    Public
Method    PUT
*/

Router.put("/update/:userId", async(req, res) => {
    try {
        const { userId } = req.params;
        const { userData } = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate( userId, 
            {
                 $set: userData,
            }, 
            {
                new: true
            }
        );

        return res.json({ user: updateUserData });


    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;


