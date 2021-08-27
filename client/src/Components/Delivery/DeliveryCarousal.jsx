import React from "react";
import Slider from "react-slick";


//component
import DeliveryCategory from "./DeliveryCategory";

//Arrows
import { NextArrow, PrevArrow } from "../CarousalArrow";

const DeliveryCarousal = () => {
    const categories = [
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/0/3301200/e559b2aee1b89bd6c7e1cef2a5290173_o2_featured_v2.jpg",
            title:"biryani",
        },

        {
            image: "https://b.zmtcdn.com/data/pictures/5/18748725/ddf36663a82194c1b780a2309391b11e_featured_v2.jpg",
            title:"vadapav",
        },

        {
            image: "https://b.zmtcdn.com/data/pictures/5/18748725/ddf36663a82194c1b780a2309391b11e_featured_v2.jpg",
            title:"vadapav",
        },

        {
            image:"https://b.zmtcdn.com/data/pictures/chains/0/3300300/79b85b3900c1c168a25dc1de70958e10_featured_v2.jpg",
            title:"pizza",
        },

        {
            image: "https://b.zmtcdn.com/data/pictures/4/18889554/836b4e4bfdc56ee05f6611bae5dca5a5_o2_featured_v2.jpg",
            title:"ice-cream",
        },
        {
            image:"https://b.zmtcdn.com/data/pictures/6/18703556/ba7df4716529af52920b8fc8a64d8219_o2_featured_v2.jpg",
            title:"pastrie",
        }
    ];

    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    return (
       <>
            <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1>
            <div className="lg:hidden flex gap-3  lg:gap-0 flex-wrap justify-between">
                {
                    categories.map((food) => ( <DeliveryCategory {...food }/>) ) 
                }       
            </div>

            <div className="hidden lg:block">
                <Slider {...settings}>
                {
                    categories.map((food) => ( <DeliveryCategory {...food }/>) ) 
                }    
                </Slider>
            </div>
       </>
    );
};

export default DeliveryCarousal;
