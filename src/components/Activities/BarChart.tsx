/** @format */

import React, { FC, useEffect, useState } from 'react';

const Bar: FC<{
  title: string;
  value: number;
  barHeight?: number;
  barWidth?: number;
  delay: number;
}> = ({ title, value, barHeight, barWidth, delay }) => {
  const [pt, setPt] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setPt(value), 0);
    return () => clearTimeout(timeout);
  }, [value]);
  return (
    <div className="bar">
      <div
        className="bar-bg"
      >
        <div
          className="bar-pt"
          style={{ height: `${pt}%`, transitionDelay: `${0.1 * delay}s` }}
        />
      </div>
      <p>{title}</p>
    </div>
  );
};
const BarChart: FC<{ data: { title: string; value: number }[] }> = ({
  data,
}) => {
  return (
    <div>
      <div className="customers_nav">
        <h3
        >
          Customers Activity
        </h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="barchart-wrapper">
        {data.map(({ title, value }, i) => (
          <Bar delay={i} title={title} value={value} />
        ))}
      </div>
    </div>
  );
};

export default BarChart;
