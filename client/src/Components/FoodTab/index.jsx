import React, { useState, useEffect } from "react";
import { RiHandbagLine } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";

const MobileTabs = () => {
    const [allTypes, setAllTypes] = useState([
        {
            id: `delivery`,
            icon: <RiHandbagLine />,
            name: "Delivery",
            isActive: false,
        },

        {
            id: `dinning`,
            icon: <IoFastFoodOutline />,
            name: "Dinning Out",
            isActive: false,
        },

        {
            id: `night`,
            icon: <BiDrink />,
            name: "NightLife",
            isActive: false,
        },

        {
            id: `nutrition`,
            icon: <IoNutritionOutline />,
            name: "Nutrition",
            isActive: false,
        },


    ]);
    const { type } = useParams();

    return (
        <>
            <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
                {
                    allTypes.map((items) => (
                        <Link to={`/${items.id}`}>
                            <div
                                className={
                                    type === items.id
                                        ? "flex flex-col relative  items-center text-xl text-zomato-400 "
                                        : "flex flex-col items-center text-xl  border-t-2"
                                }
                            >

                                <div
                                    className={
                                        type === items.id &&
                                        "absolute -top-3 w-full border-t-2 border-zomato-400"
                                    }
                                />

                                {items.icon}
                                <h5 className="text-sm">{items.name}</h5>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
};

const LargeNav = () => {
    return (
        <>
            <div className="hidden lg:flex gap-20 container  px-20 mx-auto">
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-2 rounded-full">
                        <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt="delivery" className="w-full h-full " />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">Delivery</h3>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-2 rounded-full">
                        <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="dinning out" className="w-full h-full " />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">Dinning Out</h3>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-2 rounded-full">
                        <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="nightlife" className="w-full h-full " />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">NightLife</h3>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-2 rounded-full">
                        <img src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png" alt="nutition" className="w-full h-full " />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">Nutrition</h3>
                </div>
            </div>
        </>
    );
};

const FoodTab = () => {
    return (
        <>
            <div>
                <MobileTabs />
                <LargeNav />
            </div>
        </>
    );
};

export default FoodTab;

