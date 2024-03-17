import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './features/AppContainer/AppContainer';

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
