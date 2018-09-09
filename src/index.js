import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/ConfigureStore';
import App from './Components/App';
import './Styles/App.scss';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app') || document.createElement('div'),
);

if (module && module.hot) {
  module.hot.accept();
}
