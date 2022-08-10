/** @format */

export const series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined =
  [
    {
      name: 'Offline sales',
      data: [50, 200, 400, 250, 400, 600, 770],
    },
    {
      name: 'Online sales',
      data: [220, 600, 780, 670, 580, 350, 400],
    },
  ];

export const options: ApexCharts.ApexOptions | undefined = {
  chart: {
    height: 350,
    type: 'line',
  },
  colors: ['#a88ed4', '#b9e303'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  tooltip: {
    x: {
      format: 'MM',
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    floating: true,
    fontSize: "11px",
    fontFamily: "Poppins, Arial",
    fontWeight: 600,
    offsetY: -5,
    offsetX: 0,
    markers: {
      width: 8,
      height: 8,
      strokeWidth: 0,
      radius: 12
    },
  }
};
