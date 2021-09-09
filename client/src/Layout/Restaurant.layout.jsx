import React from "react";
import { TiStarOutline} from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";

//Component
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import InfoButtons from "../Components/Restaurant/InfoButtons";
import RestaurantInfo from "../Components/Restaurant/RestaurantInfo";
import TabContainer from "../Components/Restaurant/Tab";



const RestaurantLayout = () => {
    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-20">
                <ImageGrid images={[
                    "https://b.zmtcdn.com/data/reviews_photos/32a/c6b0752a50f344699268e12b5803d32a_1602864019.jpg",
                    "https://b.zmtcdn.com/data/reviews_photos/32a/c6b0752a50f344699268e12b5803d32a_1602864019.jpg",
                    "https://b.zmtcdn.com/data/reviews_photos/32a/c6b0752a50f344699268e12b5803d32a_1602864019.jpg",
                    "https://b.zmtcdn.com/data/reviews_photos/32a/c6b0752a50f344699268e12b5803d32a_1602864019.jpg",
                    "https://b.zmtcdn.com/data/reviews_photos/32a/c6b0752a50f344699268e12b5803d32a_1602864019.jpg",
                ]} />

                <RestaurantInfo name="Spice Mystery " restaurantRating="2" deliveryRating="3.5" cuisine="Chinese, Pizza, Fast Food, North Indian, Rolls, Momos" address="Vivekanand Nagar, Nagpur" />

                <div className="my-4 flex flex-wrap gap-3">
                   <InfoButtons isActive>
                       <TiStarOutline /> Add Review
                   </InfoButtons>

                   <InfoButtons isActive>
                       <RiDirectionLine /> Direction
                   </InfoButtons>

                   <InfoButtons isActive>
                       <BiBookmarkPlus/>  Bookmark
                   </InfoButtons>

                   <InfoButtons isActive>
                       <RiShareForwardLine /> Share
                   </InfoButtons>
                </div>
                <div className="my-4">
                    <TabContainer />
                </div>
            </div>
        </>
    );
};

export default RestaurantLayout;
