import React, {useState} from "react";
import Reviews from "../../../Page/Restaurant/Reviews";


//Component
import ReviewModel from "./ReviewModel";


const AddReviewCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModel = () => setIsOpen(true); 
    return (
        <>
        <ReviewModel isOpen={isOpen} setIsOpen={setIsOpen}/>
           <h3 className="text-xl font-medium">Rate your Experience</h3>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <label htmlFor="dining">Dining</label>
                        <input type="radio" name="review" id="dining" />
                    </div>

                    <div className="flex items-center gap-2">
                        <label htmlFor="delivery">Delivery</label>
                        <input type="radio" name="review" id="delivery" />
                    </div>
                </div>

                <button onClick={openModel} className="text-zomato-400"> Write a review </button>
        </>
    )
}

export default AddReviewCard
