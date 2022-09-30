/**
 * Global Imports
*/

import React, { ReactNode } from 'react';

/**
 * Root Imports
*/

import { TailwindProps } from '@util/Tailwind';

/**
 * Local Imports
*/

import { Text, View } from '~/components/Base';
import { Chart } from '~/components/Chart';
import { Col, Row } from '~/components/Grid';
import { ThemeDriver } from '@drivers';
import { DropdownPicker } from '~/components/Form/Pick';
import { DropdownPickerItem } from '~/components/Form/Pick/DropdownPicker';

/**
 * Types/Interfaces
*/

export interface GraphBoxProps extends TailwindProps {
  title: string;
  children?: ReactNode;
}

/**
 * Locals
*/

const filters: Array<DropdownPickerItem> = [
  {
    id: 1,
    name: 'By Year',
  },
  {
    id: 2,
    name: 'By Month',
  },
];

const chartData = {
  labels: Array.from(Array(16).keys()),
  datasets: [{
    data: [12, 19, 3, 55, 50, 59, 43, 72, 33, 80, 105, 155, 355, 455, 415, 500],
    tension: 0.4,
    borderColor: ThemeDriver.color('fmhero-blue-100'),
    borderWidth: 2,
  }],
};

const chartOptions = {
  responsive: true,

  animation: {
    duration: 0,
  },

  interaction: {
    intersect: false,
  },

  elements: {
    point: {
      radius: 0,
    },
  },

  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
  },
};

/**
 * @return {JSX.Element}
 */
export function GraphBox(props: GraphBoxProps): JSX.Element {
  return (
    <Col
      style={ props.style }
      className={ 'flex-auto p-4 rounded-lg bg-white' + (props.className ? (' ' + props.className) : '') }
    >
      <Row className='justify-between'>
        <Text className='text-lg font-medium'>
          { props.title }
        </Text>
        <Col className='justify-center w-32'>
          <DropdownPicker
            name='wom'
            className='px-0 py-0 border-none'
            items={ filters }
          />
        </Col>
      </Row>
      <Chart
        type='line'
        data={ chartData }
        options={ chartOptions }
      />
    </Col>
  );
}
