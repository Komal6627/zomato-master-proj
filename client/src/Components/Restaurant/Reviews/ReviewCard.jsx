import React from "react";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

const ReviewCard = () => {
    return (
        <>
            <div className="my-3 flex flex-col gap-3">
                <div className="flex itmes-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img src="https://b.zmtcdn.com/data/user_profile_pictures/cb0/1bd907bf9aa4ec5bdcdae3a3f383fcb0.jpg" alt="avatar" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold">Jayant Killedar</h3>
                            <small className="text-gray-500">5 Reviews &#8226; 3 Followers</small>
                        </div>
                    </div>
                    <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">Follow</button>
                </div>
            
                <div  className="flex flex-col gap-3">
                    <div className="flex items-center gap-3" >
                        <span className="text-white text-xsm bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
                            3  <TiStarOutline />
                        </span>

                        <h5 className="font-regular uppercase">Delivery</h5>
                        <small className="text-gray-500">3 days ago</small>
                    </div>
                    <div className="w-full">
                        <p className="w-full text-gray-600 font-light text-base">Best and hygiene food with best teast... I never had before</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ReviewCard;
