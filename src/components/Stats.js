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

  const goodDayData = [['Comment', 'Occurrences']];

  for (const [key, value] of Object.entries(props.trends)) { 
    for (const [key2, value2] of Object.entries(value)) {
      let arr = [key2, parseInt(value2)]
      goodDayData.push(arr);
    }
  }

  // var output = props.trends.map(function(obj) {
  //   return Object.keys(obj).sort().map(function(key) { 
  //     return [obj, parseInt(key)];
  //   });
  // });

  console.log(goodDayData)

  for(let i = 0 ; i < props.submissionsData.length ; i++ ) {
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
      />

      <Chart
        chartType="BarChart"
        data={goodDayData}
        width="100vw"
        height="3000px"
        options={{
          title: 'Trends on Good Days',
          chartArea: { width: '40%' },
          colors: ['#b0120a'],
          legend: { position: 'none' }
        }
      }
      />
    </>
  )

}
export default Stats; 