/**
 * Global Imports
*/

import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  LineElement,
  LineController,
  PointElement,
  Tooltip } from 'chart.js';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Types/Interfaces
*/

export interface ChartProps extends TailwindProps {
  type: 'line';
  data: object;
  options: object;
}

/**
 * Setup
*/

ChartJs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  LineController,
  PointElement,
  Tooltip,
);

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
export function Chart(props: ChartProps): JSX.Element {
  /** Refs **/

  const canvasRef = useRef<HTMLCanvasElement>();
  const chartJsRef = useRef<ChartJs>();

  /** Side-Effects **/

  useEffect((): void => {
    chartJsRef.current = new ChartJs(canvasRef.current, {
      type: props.type,
      data: props.data as any,
      options: props.options,
    });
  }, []);

  /** Output **/

  return (
    <canvas ref={ canvasRef } />
  );
}
