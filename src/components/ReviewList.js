import React from 'react';
import Reason from './Reason';

const ReviewList = ({selectedResults, previousResultsTest}) => {

//USING OUR BACKEND

    const reasons = selectedResults.map(reason => {
        return(
            <Reason
            reason={reason.dayComment}
            date={reason.date}
            dayScore={reason.dayScore}
            key={reason.id}>

            </Reason>
        )
    })

    // const goodReasons = previousResults.map(reason => {

    //     if (reason.dayScore > 3){ 
    //     return (
    //         <Reason
    //         reason={reason.dayComment}
    //         key={reason.id}>

    //         </Reason>
    //     )} 
    // })

    // const badReasons = previousResults.map(reason => {

    //     if (reason.dayScore < 3){ 
    //     return (
    //         <Reason
    //         reason={reason.dayComment}
    //         key={reason.id}>

    //         </Reason>
    //     )} 
    // })

//    USING TEST DATA

    // const goodReasonsTest = previousResultsTest.map(reason => {

    //     if (reason.dayScore > 3){
    //     return (
    //         <Reason
    //         reason={reason.dayComment}
    //         key={reason.id}>

    //         </Reason>
    //     )} 
    // })

    // const badReasonsTest = previousResultsTest.map(reason => {

    //     if (reason.dayScore < 3){
    //     return (
    //         <Reason
    //         reason={reason.dayComment}
    //         key={reason.id}>

    //         </Reason>
    //     )} 
    // })

    // const sortGoodByDateTest = previousResultsTest.map(reason => {
    //     if(reason.date.slice(4, 5) == 6 && reason.dayScore > 3){
    //         return (
    //             <Reason
    //             reason={reason.dayComment}
    //             key={reason.id}>    
    //             </Reason>
    //         )
    //     }
    // })

    // const sortBadByDateTest = previousResultsTest.map(reason => {
    //     if(reason.date.slice(4, 5) == 6 && reason.dayScore < 3){
    //         return (
    //             <Reason
    //             reason={reason.dayComment}
    //             key={reason.id}>    
    //             </Reason>
    //         )
    //     }
    // })

    return(
        <>
        <div>
            {reasons}

            {/* <h3><b>Good</b></h3>
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
        <div>
            <h3><b>June Good</b></h3>
            <p>{sortGoodByDateTest}</p>
        </div>
        <div>
            <h3><b>June Bad</b></h3>
            <p>{sortBadByDateTest}</p> */}
        </div>
        </>
    )




}

export default ReviewList;