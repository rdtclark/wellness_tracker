import React from 'react';
import { Chart } from "react-google-charts";

const Stats = ({submissionsData}) => {

  const stats = {
    dates: [],
    dayScores: [],
    sleepScores: [],
    eatScores: [],
    mentalScores: [],
    socialScores: [],
    physicalScores: []
  }

  for(let i = 0 ; i < submissionsData.length ; i++ ) {
    // console.log(data[i]);
    stats.dates.push(new Date(submissionsData[i].date));
    stats.dayScores.push(submissionsData[i].dayScore);
    stats.sleepScores.push(submissionsData[i].answers);
    stats.eatScores.push(submissionsData[i].answers[1].score);
    stats.mentalScores.push(submissionsData[i].answers[2].score);
    stats.socialScores.push(submissionsData[i].answers[3].score);
    stats.physicalScores.push(submissionsData[i].answers[4].score);
  }

  const data = [["Date", "Day score"]];

  for(let i = 0 ; i < stats.dates.length ; i++ ) {
    data.push([stats.dates[i], stats.dayScores[i]]);
  }

  return (
    <div>
      <Chart
        chartType="SteppedAreaChart"
        data={data}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  )

}
export default Stats; 