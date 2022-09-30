/**
 * Global Imports
*/

import { createElement } from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowUp, faArrowDown, faArrowLeft, faArrowRight,
  faChevronUp, faChevronDown, faChevronLeft, faChevronRight,
  faCheck,
  faPlus, faTimes,
  faUsers,
  faUserLock,
  faWrench,
  faCogs,
  faTachometerAlt,
  faMapMarkedAlt,
  faTools,
  faClipboardList,
  faWarehouse,
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
  faCheck,
  faPlus, faTimes,
  faWrench,
  faUsers,
  faUserLock,
  faCogs,
  faTachometerAlt,
  faMapMarkedAlt,
  faTools,
  faClipboardList,
  faWarehouse,
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

render(
  createElement(EntryPoint, routers), document.getElementById(ReactConfig.id)
);
