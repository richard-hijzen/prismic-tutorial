import React from "react";
import Rating from '@material-ui/lab/Rating';

const AverageRating = () => {
    return(
        <>
            <Rating
                readOnly
                value={4.4}
                precision={0.1}     
            />  
        </>
    );
}

export default AverageRating;