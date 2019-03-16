import React, { Component } from 'react';

import Title from '../BaseComponents/Title'
import Chart from './Chart'

import Config from '../Config/Chartconfig'
import data from '../Data/data.json'

class Graph extends Component {

  render() {
    console.log('dataaa');
    console.log(data);
    return (
      <div>
        <h1>React Highcharts POC</h1>
        <Title title={'Sample Functional Component'} />
        <Chart options={Config} data={data} />
      </div>
    );
  }
}

export default Graph;