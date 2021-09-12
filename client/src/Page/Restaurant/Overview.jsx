import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import ImageViewer from 'react-simple-image-viewer';

//Component
import MenuCollection from "../../Components/Restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../../Components/Restaurant/MenuSimilarRestaurantCard";
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";
import ReviewCard from "../../Components/Restaurant/Reviews/ReviewCard";
import Mapview from "../../Components/Restaurant/Mapview";



const Overview = () => {
    const { id } = useParams();

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };


    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-xl my-4">About this placed</h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                                See all menu <IoMdArrowDropright />
                            </span>
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <MenuCollection menuTitle="Menu" pages="3"
                            image={[
                                "https://b.zmtcdn.com/data/menus/304/18995304/553736fb245c3dec3752b6903a0d9e60.jpg",
                                "https://b.zmtcdn.com/data/menus/300/3300300/8fdc1123d9089b610d77ebcf1cff5a82.jpg",
                                "https://b.zmtcdn.com/data/menus/304/18995304/553736fb245c3dec3752b6903a0d9e60.jpg"
                            ]} />
                    </div>

                    <h4 className="text-lg font-medium my-4">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">StreetFood</span>

                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">StreetFood</span>

                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">StreetFood</span>
                    </div>

                    <div className="my-4 ">
                        <h4 className="text-lg font-medium ">Average Cost</h4>
                        <h6> ₹250 for one order (approx.) </h6>
                        <small className="text-gray-500">
                            Exclusive of applicable taxes and charges, if any
                        </small>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium ">Similar Restaurant</h4>

                        <Slider {...settings}>
                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/5/19414175/6a90fd1eebba81c24dc1d4c7b5be42db_featured_v2.jpg" title="North Indian" />

                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/5/19414175/6a90fd1eebba81c24dc1d4c7b5be42db_featured_v2.jpg" title="North Indian" />

                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/5/19414175/6a90fd1eebba81c24dc1d4c7b5be42db_featured_v2.jpg" title="North Indian" />

                            <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/5/19414175/6a90fd1eebba81c24dc1d4c7b5be42db_featured_v2.jpg" title="North Indian" />
                        </Slider>
                    </div>

                    <div className="my-4">
                        <h4 className="text-lg font-medium ">Rate your delivery experience</h4>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>

                    <div className="my-4 w-full   md:hidden flex flex-col gap-4">
                        <Mapview title="Spice Mystery" phno="+917219798509" mapLocation={[21.313077942932242, 79.08410283345113]} address="Plot 5, High Court Society, Milind   Nagar, Vivekanand Nagar, Nagpur" />
                    </div>

                    <div className="my-4 flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside style={{ height: "fit-content" }} className="hidden md:flex  md:w-4/12 sticky rounded-xl  top-2 bg-white p-3 shadow-md flex flex-col gap-4">

                    <Mapview title="Spice Mystery" phno="+917219798509" mapLocation={[21.313077942932242, 79.08410283345113]} address="Plot 5, High Court Society, Milind Nagar, Vivekanand Nagar, Nagpur" />

                </aside>
            </div>
        </>
    );
};

export default Overview;
