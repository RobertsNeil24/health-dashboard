import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import SYSTEM_DATA from '../../system.data';
import Moment from 'react-moment'

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
