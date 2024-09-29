import React from 'react';

interface ProgressProps {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
}

const ProgressIcon: React.FC<ProgressProps> = ({
  width = 3,
  height = 42,
  stroke = "#E4E8F7",
  strokeWidth = 2
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 3 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="1.5"
      y1="40.5"
      x2="1.5"
      y2="1.5"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 8"
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default ProgressIcon;
