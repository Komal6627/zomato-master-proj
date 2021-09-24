import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

//Component
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import InfoButtons from "../Components/Restaurant/InfoButtons";
import RestaurantInfo from "../Components/Restaurant/RestaurantInfo";
import TabContainer from "../Components/Restaurant/Tab";
import CartContainer from "../Components/Cart/CartContainer";


const RestaurantLayout = (props) => {
    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-20">
                <ImageGrid images={[
                    "https://b.zmtcdn.com/data/pictures/chains/4/18995304/d8a048fb33d04effbd28745edcc14551.jpg",
                    "https://b.zmtcdn.com/data/pictures/chains/4/18995304/d8a048fb33d04effbd28745edcc14551.jpg",
                    "https://b.zmtcdn.com/data/pictures/chains/4/18995304/d8a048fb33d04effbd28745edcc14551.jpg",
                    "https://b.zmtcdn.com/data/pictures/chains/4/18995304/d8a048fb33d04effbd28745edcc14551.jpg",
                    "https://b.zmtcdn.com/data/pictures/chains/4/18995304/d8a048fb33d04effbd28745edcc14551.jpg",
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
                        <BiBookmarkPlus />  Bookmark
                    </InfoButtons>

                    <InfoButtons isActive>
                        <RiShareForwardLine /> Share
                    </InfoButtons>
                </div>
                <div className="my-10">
                    <TabContainer ></TabContainer>
                </div>
               <div className="relative">
                    {props.children}
               </div>
            </div>
            <CartContainer />
        </>
    );
};

export default RestaurantLayout;
