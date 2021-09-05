import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {
    return (
        <>
            <div className="w-full p-4  md:w-1/2 lg:w-1/3">
                <div className="w-full h-full bg-white rounded-3xl transition duration-700 ease-in-out hover:shadow-lg">
                <div className={`w-full p-4 h-56 rounded-t-3xl bg-${props.bg}-100 `}>
                    <img src={props.image} alt="suppliments" className="w-full h-full " />
                </div>

                <div className="p-3 flex flex-col gap-3">
                    <div className="flex mt-2 items-center gap-3">
                        <div className="w-4 h-4">
                            <img src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png" alt="veg" className="w-full h-full" />
                        </div>

                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={16}
                            isHalf={true}
                            value={3}
                            emptyIcon={<BsStar />}
                            halfIcon={<BsStarHalf />}
                            fullIcon={<BsStarFill />}
                            activeColor="#ffd700"
                        />
                        <span className="text-gray-400">3</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-700">Sleep - Timed Release Melatonin</h3>
                    <p className="text-sm font-light text-gray-400">An advanced timed-release formula that helps you fall asleep faster and wake up feeling fresher.</p>

                    <div className="mt-4">
                        <hr />
                    </div>
                    <div>
                       <span>
                       <s className="text-gray-300 font-light mr-3"> ₹500</s>
                        <strong > ₹125 </strong>
                       </span>
                       <p>monthly pack - 30 tablets</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default NutritionCard;
