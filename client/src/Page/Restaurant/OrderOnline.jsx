import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

//Component
import FloatMenuBtn from "../../Components/Restaurant/Order-Online/FloatMenuBtn";
import FoodItem from "../../Components/Restaurant/Order-Online/FoodItem";
import FoodList from "../../Components/Restaurant/Order-Online/FoodList";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";


const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex px-3">
                <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>

                <div className="w-full  md:w-3/4 ">
                    <div className="pl-3 mb-4 ">
                        <h2 className="text-xl font-semibold"> Order Online</h2>

                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45min
                        </h4>
                    </div>

                    <section className="flex h-screen overflow-y-scroll  flex-col gap-3 md:gap-5">
                        <FoodList
                            title="Recommended"
                            items={[
                                {
                                    price: "300",
                                    rating: "3",
                                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sint quas autem obcaecati ipsum architecto minus illo! Molestiae nostrum repellat, sunt esse, ea dolorem sed unde aliquid assumenda id recusandae.",
                                    image: "https://b.zmtcdn.com/data/dish_photos/bcc/8de555f5fee13dd644c121e82659abcc.jpg",
                                },
                            ]}
                        />

                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;
