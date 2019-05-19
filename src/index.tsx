import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import 'react-table/react-table.css';

import { stores } from './stores';
import App from './components/App';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
