import React from "react";


const CalendarBox = ({selectedResults}) => {

  const results = selectedResults.map(result => {
    
    let dt = new Date(result.date);

    if (result.dayScore > 3){
      var day_style = "green" 
    } else {
      var day_style = "red"
    }   
    
    return (<li id={result.id}>
    <p>{result.dayComment}</p>
    <p>{dt.getDate()}</p>
    <p>{dt.getDay()}</p>
    <p className={day_style}>{result.dayScore}</p>
    <p></p>
    </li>
    )
  })

    return(
        <>
        <ul>
          {results}
        </ul>
        </>
    )
}

export default CalendarBox;