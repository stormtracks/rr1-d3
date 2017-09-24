import * as d3 from 'd3'
import React from 'react'

import DonutChartPath from './DonutChartPath'
import DonutChartLegend from './DonutChartLegend'

const DonutChart = ({ chartId, width, height, data }) => {
  const pie = d3.pie()
    .value(d => d.count)
    .padAngle(0.04)
    .sort(null)

  return (
    <div>
      <svg
        id={chartId}
        width={width}
        height={height}
        className="shadow">
        <DonutChartPath
          width={width}
          height={height}
          pie={pie}
          data={data}/>
        <DonutChartLegend
          pie={pie}
          data={data}
          width={width}
          height={height}/>
      </svg>
    </div>
  )
}

DonutChart.propTypes = {
  chartId: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  data: React.PropTypes.array.isRequired
}

export default DonutChart
