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

  let graphData = props.graphData;
  let graphTitle = props.graphTitle;

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

  function handleSelect(event) {
    const graphName = event.target.value;
    let data = [];
    let title = "";
    if( graphName === "dayScore" ) {
      data = dayData;
      title = "Well-being by day";
    }
    if( graphName === "sleepScore" ) {
      data = sleepData;
      title = "Sleeping by day";
    }
    if( graphName === "eatScore" ) {
      data = eatData;
      title = "Eating by day";
    }
    if( graphName === "mentalScore" ) {
      data = mentalData;
      title = "Mental by day";
    }
    if( graphName === "socialScore" ) {
      data = socialData;
      title = "Socializing by day";
    }
    if( graphName === "physicalScore" ) {
      data = physicalData;
      title = "Physical by day";
    }
    props.onGraphSelected(title, data);
  }

  if(graphTitle === ""){
    graphData = dayData;
    graphTitle = "Well-being score";
  }

  const melon = [
    ["Protein",0.0168,"Melons, cantaloupe, raw"],
    ["Carbohydrates",0.029672727272727274,"Melons, cantaloupe, raw"],
    ["Vitamin C",0.4893333333333334,"Melons, cantaloupe, raw"],
    ["Calcium",0.006923076923076923,"Melons, cantaloupe, raw"],
    ["Zinc",0.0225,"Melons, cantaloupe, raw"],
    ["Sodium",0.010666666666666666,"Melons, cantaloupe, raw"]
  ];
  const color = "blue";

  return (
    <>
      <ReasonByDate
        onDateSubmit={props.onDateSubmit}
      />
      <label htmlFor="graphs">Graphs</label>

      <select name="graphs" id="select-graphs" onChange={handleSelect}>
        <option value="dayScore" defaultValue >Day score</option>
        <option value="sleepScore">Sleeping score</option>
        <option value="eatScore">Eating score</option>
        <option value="mentalScore">Mental score</option>
        <option value="socialScore">Social score</option>
        <option value="physicalScore">Physical score</option>
      </select>

      <Chart
      chartType="SteppedAreaChart"
      data={graphData}
      options={{
        title: graphTitle,
        vAxis: {
          'minValue': -2.5, 
          'maxValue': 2.5
        }
      }}
      width="80%"
      height="400px"
      legendToggle
      />

    </>
  )

}
export default Stats; 