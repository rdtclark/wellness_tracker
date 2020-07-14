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

    // Get days of the week
    switch (dt.getDay()){
      case 0:
        var day = "Sunday";
        break;
      case 1:
        var day = "Monday";
        break;
      case 2:
        var day = "Tuesday";
        break;
      case 3:
        var day = "Wednesday";
        break;
      case 4:
        var day = "Thursday";
        break;
      case 5:
        var day = "Friday";
        break;
      case 6:
        var day = "Saturday";
        break;  
    }

    //colours for each day score number
    switch (result.dayScore){
      case 1:
      var day_style = "dred"; 
      break;
      case 2:
      var day_style = "red"; 
      break;
      case 3:
      var day_style = "orange"; 
      break;
      case 4:
      var day_style = "yellow"; 
      break;
      case 5:
      var day_style = "green"; 
      break;
      case 6:
      var day_style = "bgreen"; 
      break;
    }

    return (<div className="panel" className={day_style} id={result.id}>{dt.getDate()}
      <p><i>{result.dayComment}</i></p>
      <p>{day}</p>
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