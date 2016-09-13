import React from 'react';
import {
  AppContainer
} from 'react-hot-loader';
import {render} from 'react-dom';
import AppRouter from './components/router';

class App {

  constructor() {

    render(
      <AppContainer>
        <AppRouter />
      </AppContainer>,
      document.getElementById('app')
    );

    if (module.hot) {

      module.hot.accept('./components/router', () => {

        require('./components/router');

        render(
          <AppContainer>
            <AppRouter />
          </AppContainer>,
          document.getElementById('app')
        );
      });
    }
  }
}

export default new App();
