import React from 'react';
import GoodReason from './GoodReason';

const ReviewList = ({previousResults}) => {


    const goodReasons = previousResults.map(reason => {

        if (reason.dayScore > 3){ 
        return (
            <GoodReason
            reason={reason.dayComment}
            key={reason.id}>

            </GoodReason>
        )} 
    })

    const badReasons = previousResults.map(reason => {

        if (reason.dayScore < 3){ 
        return (
            <GoodReason
            reason={reason.dayComment}
            key={reason.id}>

            </GoodReason>
        )} 
    })


    return(
        <>
        <div>
            <h3>Good</h3>
            <p>{goodReasons}</p>
        </div>
        <div>
            <h3>Bad</h3>
            <p>{badReasons}</p>
        </div>
        </>
    )

}

export default ReviewList;