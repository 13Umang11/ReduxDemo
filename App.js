import React from 'react';
import {Provider} from 'react-redux';
import Appindex from './Redax/Appindex';
import {store} from './Redax/Reducers/RootStore';

// const store = createStore(MainReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Appindex />
    </Provider>
  );
}
