import React from 'react';
import GoodReason from './GoodReason';

const ReviewList = ({previousResults}) => {


    const goodReasons = previousResults.map(reason => {

        return (
            <GoodReason
            reason={reason.dayComment}
            key={reason.id}>

            </GoodReason>
        )
    })


    return(
        <div>
            <p>{goodReasons}</p>
        </div>
    )

}

export default ReviewList;