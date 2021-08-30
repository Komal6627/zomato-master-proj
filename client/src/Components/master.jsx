import React from "react";
import { useParams } from "react-router-dom";

//components
import Delivery from "./Delivery";
import Dinning from "./Dinning";
import DinningCarousal from "./Dinning/DinningCarousal";



const Master = () => {
    const { type } = useParams();

    return (
        <>
            <div className="my-5">
                { type === "delivery"  && <Delivery/> }
                {type === "dinning" && <Dinning/> }
            </div>
          
        </>
    );
};

export default Master;
