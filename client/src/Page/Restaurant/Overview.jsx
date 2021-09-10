import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


//Component
import MenuCollection from "../../Components/Restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../../Components/Restaurant/MenuSimilarRestaurantCard";
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";
import ReviewCard from "../../Components/Restaurant/Reviews/ReviewCard";


const Overview = () => {
    const { id } = useParams();

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
                        <MenuCollection menuTitle="Menu" pages="3" image="https://b.zmtcdn.com/data/menus/304/18995304/553736fb245c3dec3752b6903a0d9e60.jpg" />
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
                    <div className="my-4 flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside style={{ height: "fit-content" }} className="hidden md:block md:w-4/12 sticky rounded-xl  top-2 bg-white p-3 shadow-md">
                    <div>
                        <h4 className="text-lg font-medium ">Call</h4>
                        <h5 className="text-zomato-400 font-medium">+917219798509</h5>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium">Direction</h4>
                        <div className="w-full h-48">
                        <MapContainer center={[21.282369871813387, 79.061337627554]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[21.282369871813387, 79.061337627554]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default Overview;
