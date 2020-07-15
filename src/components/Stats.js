import React from 'react';
import ReasonByDate from "./ReasonByDate";
import { Chart } from "react-google-charts";

const Stats = (props) => {

  const stats = {
    dates: [],
    dayScores: [],
    sleepScores: [],
    eatScores: [],
    mentalScores: [],
    socialScores: [],
    physicalScores: []
  }

  for(let i = 0 ; i < props.submissionsData.length ; i++ ) {
    // console.log(data[i]);
    stats.dates.push(new Date(props.submissionsData[i].date));
    stats.dayScores.push(props.submissionsData[i].dayScore);
    stats.sleepScores.push(props.submissionsData[i].answers[1].score);
    stats.eatScores.push(props.submissionsData[i].answers[1].score);
    stats.mentalScores.push(props.submissionsData[i].answers[2].score);
    stats.socialScores.push(props.submissionsData[i].answers[3].score);
    stats.physicalScores.push(props.submissionsData[i].answers[4].score);
  }

  const data = [["Date", "Day score", "Sleep score", "Eat score", "Mental score", "Social score", "Physical score"]];

  for(let i = 0 ; i < stats.dates.length ; i++ ) {
    data.push([stats.dates[i], stats.dayScores[i], stats.sleepScores[i], stats.eatScores[i], stats.mentalScores[i], stats.socialScores[i], stats.physicalScores[i]]);
  }

  return (
    <>
      <ReasonByDate
        onDateSubmit={props.onDateSubmit}
      />
      <Chart
        chartType="SteppedAreaChart"
        data={data}
        width="100%"
        height="400px"
        legendToggle
      />
    </>
  )

}
export default Stats; 