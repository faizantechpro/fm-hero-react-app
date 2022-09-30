/**
 * Global Imports
*/

import { createElement } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp, faArrowDown, faArrowLeft, faArrowRight,
  faChevronUp, faChevronDown, faChevronLeft, faChevronRight,
  faBars,
  faCheck,
  faPlus, faTimes,
  faChartBar,
  faUsers,
  faUserLock,
  faWrench,
  faCogs,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Root Imports
*/

import { ReactConfig } from '@config';

/**
 * Local Imports
*/

import { EntryPoint } from '~/components/EntryPoint';

/**
 * Relative Imports
*/

import { LoadingRouter, GuestRouter, UnidentifiedRouter, IdentifiedRouter } from './routers';

/**
 * Load FontAwesome Icons
*/

library.add(
  faArrowUp, faArrowDown, faArrowLeft, faArrowRight,
  faChevronUp, faChevronDown, faChevronLeft, faChevronRight,
  faBars,
  faCheck,
  faPlus, faTimes,
  faChartBar,
  faWrench,
  faUsers,
  faUserLock,
  faCogs,
  faSignOutAlt,
);

/**
 * Locals
*/

const routers = {
  LoadingRouter,
  GuestRouter,
  UnidentifiedRouter,
  IdentifiedRouter,
};

/**
 * Start App
*/

ReactDOM.render(
  createElement(EntryPoint, routers), document.getElementById(ReactConfig.id)
);
