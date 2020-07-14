import React from "react";
import ReasonByDate from './ReasonByDate';


const CalendarBox = (props) => {

  const results = props.selectedResults.map(result => {
    
    let dt = new Date(result.date);

    if (result.dayScore > 3){
      var day_style = "green" 
    } else {
      var day_style = "red"
    }   

    return (<div className="panel" id={result.id}>{dt.getDate()}
      <p>{result.dayComment}</p>
      <p>{dt.getDay()}</p>
      <p className={day_style}>{result.dayScore}</p>
    </div>
    )  
  })

    return(
        <>
        <ReasonByDate
          onDateSubmit={props.onDateSubmit}
        />
        <div class="wrapper">
          {results}
        </div>
        </>
    )
}

export default CalendarBox;