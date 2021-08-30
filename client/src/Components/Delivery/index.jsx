import React, {useState} from "react";

//component
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";


const Delivery = () => {
    const [restaurantList, setrestaurantList] = useState([
        {
            _id: "123456",
            photos: [
               "https://b.zmtcdn.com/data/pictures/0/3300060/475526b83b5570c2544be75995bc7d15.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name: "Veeraswami",
            cuisine:["South Indian"],
            averageCost:100,
            isPro: false,
            isOff: 75,
            durationOfdelivery: 43,
            restaurantReviewValue:4.3
        },

        {
            _id: "123456-2",
            photos: [
               "https://b.zmtcdn.com/data/pictures/2/3300272/67d010c134a54f510e49eab11593c418.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Haldiram's Planet Food",
            cuisine:["Street Food","North Indian", "South Indian", "Fast Food", "Mithai, Beverages"],
            averageCost:200,
            isPro: true,
            isOff: 75,
            durationOfdelivery: 32,
            restaurantReviewValue:4.1
        },

        {
            _id: "123456-2",
            photos: [
               "https://b.zmtcdn.com/data/pictures/2/3300272/67d010c134a54f510e49eab11593c418.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Haldiram's Planet Food",
            cuisine:["Street Food","North Indian", "South Indian", "Fast Food", "Mithai, Beverages"],
            averageCost:200,
            isPro: true,
            isOff: 75,
            durationOfdelivery: 32,
            restaurantReviewValue:4.1
        },
    ]);
    return (
        <>
            <DeliveryCarousal />
            {/* <Brand/> */}
            <div className="flex justify-between flex-wrap">
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard {...restaurant} key = {restaurant._id}/>
                    ))
                }
            </div>

        </>
    );
};

export default Delivery;
