import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Redirect = () => {
    const history = usehistory();
    const {id} = useParams();

    useEffect(() =>{
        history.push(`/restaurant/${id}/overview`)
    }, []);
    return (
        <div>
            
        </div>
    )
}

export default Redirect;
