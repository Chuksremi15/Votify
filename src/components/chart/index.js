import React, { Component } from "react";
import Chart from "chart.js/auto";

export default class LineChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Kosi",
          "Danail",
          "Emma",
          "Chizobar",
          "Ifenyi",
          "Amara",
          "Mercy",
          "Ifenyi",
          "Amara",
          "Mercy",
        ],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 107, 111, 133],
            label: "Poll results",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: true,
          },
        ],
      },
    });
  }
  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
