/**
 * Global Imports
*/

import React, { useState } from 'react';

/**
 * Local Imports
*/

import { AdminPrimaryLayout } from '~/layouts/Primary';
import { Span, Text, View } from '~/components/Base';
import { Col, Row } from '~/components/Grid';
import { RouteProps } from '~/components/Router';
import { ScreenOptions, useScreen } from '~/hooks/Util/Screen';
import { GraphBox, StatBox } from '~/components/FMHero/Analytics';
import { useSession } from '~/hooks/User';
import { DropdownPicker } from '~/components/Form/Pick';
import { DropdownPickerItem } from '~/components/Form/Pick/DropdownPicker';

/**
 * Types/Interfaces
*/

enum AnalyticsFilter {
  AllTime,
  CompanyName,
  CustomTimeRange,
}

interface HeaderProps {
  name: string;
  onChangeFilter: (filter: number) => void | Promise<void>;
}

interface StatBoxRowProps {
  leftTitle: string;
  leftValue: number;
  rightTitle: string;
  rightValue: number;
}

export interface ShowAnalyticsPropsRouteParams {
  //
}

export interface ShowAnalyticsProps extends RouteProps<ShowAnalyticsPropsRouteParams> {
  //
}

/**
 * Locals
*/

const options: ScreenOptions = {
  title: 'Analytics',
  breadcrumbs: [],
};

const filters: Array<DropdownPickerItem> = [
  {
    id: AnalyticsFilter.AllTime,
    name: 'View by All Time',
  },
  {
    id: AnalyticsFilter.CompanyName,
    name: 'View by Company Name / ID',
  },
  {
    id: AnalyticsFilter.CustomTimeRange,
    name: 'View by Custom Time Range',
  },
];

/**
 * Components
*/

/**
 * @return {JSX.Element}
 */
function BaseHeader(props: HeaderProps): JSX.Element {
  return (
    <Col className='md:flex-row justify-between items-center'>
      <Text className='text-2xl'>
        Welcome back, <Span className='font-bold'>{ props.name }</Span>
      </Text>
      <View className='w-80 mt-2 md:mt-0'>
        <DropdownPicker
          name='analytics.filter'
          items={ filters }
          form={ null }
        />
      </View>
    </Col>
  );
}

const Header = React.memo(BaseHeader);

/**
 * @return {JSX.Element}
 */
function StatBoxRow(props: StatBoxRowProps): JSX.Element {
  return (
    <Row className='flex-auto flex-wrap justify-between'>
      <StatBox
        title={ props.leftTitle }
        value={ props.leftValue }
      />
      <StatBox
        title={ props.rightTitle }
        value={ props.rightValue }
      />
    </Row>
  );
}

/**
 * @return {JSX.Element}
 */
export function ShowAnalytics(props: ShowAnalyticsProps): JSX.Element {
  /** Hooks **/

  const screen = useScreen(props, options);
  const session = useSession();

  /** States **/

  const [ filter, setFilter ] = useState<AnalyticsFilter>();

  /** Output **/

  return (
    <AdminPrimaryLayout showContentHeader={ false }>
      <Header
        name={ session.user?.first_name }
        onChangeFilter={ setFilter }
      />

      <Row className='flex-wrap justify-between mt-16'>
        <Col className='w-full lg:w-1/2-2'>
          <GraphBox
            title='Gross Revenue'
          />
        </Col>
        <Col className='lg:space-y-4 w-full lg:w-1/2-2'>
          <StatBoxRow
            leftTitle='Registered Users'
            leftValue={ Math.round(Math.random() * 9999) }
            rightTitle='Equipment Owners'
            rightValue={ Math.round(Math.random() * 9999) }
          />
          <StatBoxRow
            leftTitle='Contractors / Companies'
            leftValue={ Math.round(Math.random() * 9999) }
            rightTitle='Subscribers'
            rightValue={ Math.round(Math.random() * 9999) }
          />
        </Col>
      </Row>

      <Row className='flex-wrap justify-between lg:mt-4'>
        <Col className='lg:space-y-4 w-full lg:w-1/2-2'>
          <StatBoxRow
            leftTitle='Uploaded Images'
            leftValue={ Math.round(Math.random() * 9999) }
            rightTitle='Uploaded Videos'
            rightValue={ Math.round(Math.random() * 9999) }
          />
          <StatBoxRow
            leftTitle='# of Assets / Cylinders'
            leftValue={ Math.round(Math.random() * 9999) }
            rightTitle='# of Extreme Leak Loss Cases'
            rightValue={ Math.round(Math.random() * 9999) }
          />
        </Col>
        <Col className='w-full lg:w-1/2-2 mt-4 lg:mt-0'>
          <GraphBox
            title='Service Events'
          />
        </Col>
      </Row>
    </AdminPrimaryLayout>
  );
}
