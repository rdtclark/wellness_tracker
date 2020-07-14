import React from "react";

const CalendarBox = (selectedResults) => {


  const results = selectedResults.map(result => {
    
    <li>
    <p>{result.dayComment}</p>
    <p>{result.date}</p>
    <p>{result.dayS>ore}</p>
    <p>{result.id}</p>
    </li>
  
  }

    return(
        <>
        <ul>
          {results}
        </ul>
