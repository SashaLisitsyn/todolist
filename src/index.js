import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import todoStore from './store/todoStore';

import App from './components/App';

render(
  <React.StrictMode>
    <Provider store={todoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
