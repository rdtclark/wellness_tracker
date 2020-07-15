import React from 'react';
import ReasonByDate from "./ReasonByDate";
import { Chart } from "react-google-charts";

const Stats = (props) => {

  const stats = {
    dates: [],
    day: {
      scores: [],
      good: [],
      bad: []
    },
    sleep: {
      scores: [],
      good: [],
      bad: []
    },
    eat: {
      scores: [],
      good: [],
      bad: []
    },
    mental: {
      scores: [],
      good: [],
      bad: []
    },
    social: {
      scores: [],
      good: [],
      bad: []
    },
    physical: {
      scores: [],
      good: [],
      bad: []
    }
  }

  const offset = 3.5;

  for(let i = 0 ; i < props.submissionsData.length ; i++ ) {
    stats.dates.push(new Date(props.submissionsData[i].date));

    stats.day.scores.push(props.submissionsData[i].dayScore - offset);
    if( props.submissionsData[i].dayScore - offset >= 0 ){
      stats.day.good.push(props.submissionsData[i].dayScore - offset);
      stats.day.bad.push(0);
    }
    if( props.submissionsData[i].dayScore - offset < 0 ){
      stats.day.good.push(0);
      stats.day.bad.push(props.submissionsData[i].dayScore - offset);
    }

    stats.sleep.scores.push(props.submissionsData[i].answers[0].score - offset);
    if( props.submissionsData[i].answers[0].score - offset >= 0 ){
      stats.sleep.good.push(props.submissionsData[i].answers[0].score - offset);
      stats.sleep.bad.push(0);
    }
    if( props.submissionsData[i].answers[0].score - offset < 0 ){
      stats.sleep.good.push(0);
      stats.sleep.bad.push(props.submissionsData[i].answers[0].score - offset);
    }

    stats.eat.scores.push(props.submissionsData[i].answers[1].score - offset);
    if( props.submissionsData[i].answers[1].score - offset >= 0 ){
      stats.eat.good.push(props.submissionsData[i].answers[1].score - offset);
      stats.eat.bad.push(0);
    }
    if( props.submissionsData[i].answers[1].score - offset < 0 ){
      stats.eat.good.push(0);
      stats.eat.bad.push(props.submissionsData[i].answers[1].score - offset);
    }

    stats.mental.scores.push(props.submissionsData[i].answers[2].score - offset);
    if( props.submissionsData[i].answers[2].score - offset >= 0 ){
      stats.mental.good.push(props.submissionsData[i].answers[2].score - offset);
      stats.mental.bad.push(0);
    }
    if( props.submissionsData[i].answers[2].score - offset < 0 ){
      stats.mental.good.push(0);
      stats.mental.bad.push(props.submissionsData[i].answers[2].score - offset);
    }

    stats.social.scores.push(props.submissionsData[i].answers[3].score - offset);
    if( props.submissionsData[i].answers[3].score - offset >= 0 ){
      stats.social.good.push(props.submissionsData[i].answers[3].score - offset);
      stats.social.bad.push(0);
    }
    if( props.submissionsData[i].answers[3].score - offset < 0 ){
      stats.social.good.push(0);
      stats.social.bad.push(props.submissionsData[i].answers[3].score - offset);
    }

    stats.physical.scores.push(props.submissionsData[i].answers[4].score - offset);
    if( props.submissionsData[i].answers[4].score - offset >= 0 ){
      stats.physical.good.push(props.submissionsData[i].answers[4].score - offset);
      stats.physical.bad.push(0);
    }
    if( props.submissionsData[i].answers[4].score - offset < 0 ){
      stats.physical.good.push(0);
      stats.physical.bad.push(props.submissionsData[i].answers[4].score - offset);
    }
  }

  const dayData = [["Date", "Good Day", "Bad Day"]];
  const sleepData = [["Date", "Good Sleep", "Bad Sleep"]];
  const eatData = [["Date", "Good Food", "Bad Food"]];
  const mentalData = [["Date", "Good Mental", "Bad Mental"]];
  const socialData = [["Date", "Good Social", "Bad Social"]];
  const physicalData = [["Date", "Good Physical", "Bad Physical"]];

  for(let i = 0 ; i < stats.dates.length ; i++ ) {
    dayData.push([stats.dates[i], stats.day.good[i], stats.day.bad[i]]);
    sleepData.push([stats.dates[i], stats.sleep.good[i], stats.sleep.bad[i]]);
    eatData.push([stats.dates[i], stats.eat.good[i], stats.eat.bad[i]]);
    mentalData.push([stats.dates[i], stats.mental.good[i], stats.mental.bad[i]]);
    socialData.push([stats.dates[i], stats.social.good[i], stats.social.bad[i]]);
    physicalData.push([stats.dates[i], stats.physical.good[i], stats.physical.bad[i]]);
  }

  return (
    <>
      <ReasonByDate
        onDateSubmit={props.onDateSubmit}
      />
      <Chart
        chartType="SteppedAreaChart"
        data={dayData}
        options={{
          title: "Well-being by day",
          vAxis: {
            'minValue': -2.5, 
            'maxValue': 2.5
          }
        }}
        width="100%"
        height="400px"
        legendToggle
      />
      <Chart
        chartType="SteppedAreaChart"
        data={sleepData}
        options={{
          title: "sleeping by day",
          vAxis: {
            'minValue': -2.5, 
            'maxValue': 2.5
          }
        }}
        width="100%"
        height="400px"
        legendToggle
      />
      <Chart
        chartType="SteppedAreaChart"
        data={eatData}
        options={{
          title: "Eating by day",
          vAxis: {
            'minValue': -2.5, 
            'maxValue': 2.5
          }
        }}
        width="100%"
        height="400px"
        legendToggle
      />
      <Chart
        chartType="SteppedAreaChart"
        data={mentalData}
        options={{
          title: "mental by day",
          vAxis: {
            'minValue': -2.5, 
            'maxValue': 2.5
          }
        }}
        width="100%"
        height="400px"
        legendToggle
      />
      <Chart
        chartType="SteppedAreaChart"
        data={socialData}
        options={{
          title: "Socializing by day",
          vAxis: {
            'minValue': -2.5, 
            'maxValue': 2.5
          }
        }}
        width="100%"
        height="400px"
        legendToggle
      />
      <Chart
        chartType="SteppedAreaChart"
        data={physicalData}
        options={{
          title: "Physical by day",
          vAxis: {
            'minValue': -2.5, 
            'maxValue': 2.5
          }
        }}
        width="100%"
        height="400px"
        legendToggle
      />
    </>
  )

}
export default Stats; 