import React, { Component } from 'react';
import Highcharts from 'highcharts'


class Chart extends Component {

  constructor(props) {
    super(props);
    this.chartContainer = React.createRef();
  }

  myFunctioon = () => {
    console.log(this)
    alert('clicked me')
  }

  componentDidMount() {
    const data = this.props.data;
    let chartOptions = {...this.props.options, ...data}
    this.props.options.plotOptions.series.point.events.click = this.myFunctioon;
    this.chart = new Highcharts['Chart'](
      this.chartContainer.current,
      chartOptions
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref={this.chartContainer} />;
  }
}

export default Chart;