import React from 'react';
import Reason from './Reason';

const ReviewList = ({previousResults, previousResultsTest}) => {

//USING OUR BACKEND

    const goodReasons = previousResults.map(reason => {

        if (reason.dayScore > 3){ 
        return (
            <Reason
            reason={reason.dayComment}
            key={reason.id}>

            </Reason>
        )} 
    })

    const badReasons = previousResults.map(reason => {

        if (reason.dayScore < 3){ 
        return (
            <Reason
            reason={reason.dayComment}
            key={reason.id}>

            </Reason>
        )} 
    })

//    USING TEST DATA

    const goodReasonsTest = previousResultsTest.map(reason => {

        if (reason.dayScore > 3){
        return (
            <Reason
            reason={reason.dayComment}
            key={reason.id}>

            </Reason>
        )} 
    })

    const badReasonsTest = previousResultsTest.map(reason => {

        if (reason.dayScore < 3){
        return (
            <Reason
            reason={reason.dayComment}
            key={reason.id}>

            </Reason>
        )} 
    })

    return(
        <>
        <div>
            <h3><b>Good</b></h3>
            <p>{goodReasons}</p>
        </div>
        <div>
            <h3><b>Bad</b></h3>
            <p>{badReasons}</p>
        </div>
        <div>
            <h3><b>Good Test</b></h3>
            <p>{goodReasonsTest}</p>
        </div>
        <div>
            <h3><b>Bad Test</b></h3>
            <p>{badReasonsTest}</p>
        </div>
        </>
    )




}

export default ReviewList;