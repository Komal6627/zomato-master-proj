import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive} from "react-icons/bi";

//Component
import FloatMenuBtn from "../../Components/Restaurant/Order-Online/FloatMenuBtn";
import FoodItem from "../../Components/Restaurant/Order-Online/FoodItem";
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";


//h-screen
const OrderOnline = () => {
    return (
        <>
            <div className="w-full flex ">
                <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
                    <MenuListContainer/>
                    <MenuListContainer/>
                    <MenuListContainer/>
                    <MenuListContainer/>                  
                </aside>

                <div className="w-full md:w-3/4">               
                    <h2 className="text-xl font-semibold"> Order Online</h2>
                  
                    <h4 className="flex items-center gap-2 font-light text-gray-500">
                        <AiOutlineCompass /> Live Track Your Order | <BiTimeFive/> 45min
                    </h4>

                    <section>
                        <FoodItem image="https://b.zmtcdn.com/data/dish_photos/bcc/8de555f5fee13dd644c121e82659abcc.jpg" price="300" rating={3} description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sint quas autem obcaecati ipsum architecto minus illo! Molestiae nostrum repellat, sunt esse, ea dolorem sed unde aliquid assumenda id recusandae." title="Paneer Tikka Masala"/>
                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;
