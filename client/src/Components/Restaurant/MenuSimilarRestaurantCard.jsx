import React from "react";
import { TiStar } from "react-icons/ti";

const MenuSimilarRestaurantCard = (props) => {
    return (
        <>
            <div className="mx-2">
                <div className="bg-white shadow-lg rounded-md w-24 md:w-64">
                    <div className="w-full h-48 ">
                        <img src={props.image} alt="food" className="w-full h-full object-cover rounded-t-md " />
                    </div>

                    <div className="flex flex-col gap-2 p-3">
                        <h3 className="text-lg  font-semibold ">{props.title}</h3>
                        <div className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-1">
                                <span className="flex items-center gap-1 bg-green-700 text-white text-xs  px-2 py-1 rounded">
                                    30 <TiStar />
                                </span>
                                Dining
                            </span>

                            <span className="w-2 h-4 pr-2 border-r border-gray-500" />

                            <span className="flex items-center gap-1 pr-2 border-r-1 border-gray-500">
                                <span className="flex items-center gap-1 bg-green-700 text-white text-xs  px-2 py-1 rounded">
                                    30 <TiStar />
                                </span>
                                Dining
                            </span>
                        </div>

                        <h4>Chinese, North Indian</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuSimilarRestaurantCard;
