import axios from "axios";

//Redux types
import {GET_IMAGE} from "./Image.type";

    export const getImage = (_id) => async (dispatch) => {
        try {
          const restaurantList = await axios({
            method: "GET",
            url: `http://localhost:4000/image/${_id}`,
          });
      
          return dispatch({ type: GET_IMAGE, payload: restaurantList.data });
        } catch (error) {
          return dispatch({ type: "ERROR", payload: error });
        }
};


