import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
const Earnings = () => {
  const state: {
    options: ApexOptions | undefined;
    series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
  } = {
    options: {
      labels: ["Sales", "Profit", "Growth"],
      colors: ['#000', '#b9e303', '#b5d5e1'],
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "bottom",
        horizontalAlign: "center",
        floating: false,
        fontSize: "12px",
        fontFamily: "Poppins, Arial",
        fontWeight: 600,
        width: undefined,
        height: undefined,
        formatter: undefined,
        offsetX: 0,
        offsetY: 0,
        labels: {
          colors: "undefined",
          useSeriesColors: false,
        },
        markers: {
          width: 8,
          height: 8,
          strokeWidth: 0,
          strokeColor: "#fff",
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 30,
          vertical: 0,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
      plotOptions: {
        radialBar: {
          inverseOrder: false,
          offsetX: 0,
          offsetY: 0,
          hollow: {
            margin: 5,
            size: "50%",
            background: "transparent",
            image: undefined,
            imageWidth: 150,
            imageHeight: 150,
            imageOffsetX: 0,
            imageOffsetY: 0,
            imageClipped: true,
            position: "front",
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5,
            },
          },
          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: "#f2f2f2",
            strokeWidth: "125%",
            opacity: 1,
            margin: 8,
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5,
            },
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: undefined,
              color: undefined,
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: undefined,
              color: undefined,
              offsetY: 16,
              formatter: function (val: number) {
                return val + "%";
              },
            },
            total: {
              show: false,
              label: "Total",
              color: undefined,
              formatter: function (w: any) {
                return (
                  w.globals.seriesTotals.reduce((a: number, b: number) => {
                    return a + b;
                  }, 0) /
                  w.globals.series.length +
                  "%"
                );
              },
            },
          },
        },
      },
    },

    series: [78, 85, 70],
  };

  return (
    <div className="donut">
      <div className="dropdown_nav">
        <h3 style={{ margin: '28px 20px 20px 25px', fontSize: '18px', fontWeight: '600' }}>Earnings</h3>
        <div className="dropdown">
          <label>
            <select name="dropdown" id="dropdown">
              <option value="Month">Month</option>
            </select>
          </label>
        </div>
      </div>
      <Chart
        options={state.options}
        series={state.series}
        type="radialBar"
        width="380"
        className="chart_wrapper" />
    </div>
  );
};
export default Earnings;
