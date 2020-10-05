import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CakeInputContainer from './components/CakeInputContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import EmployeeContainer from './components/EmployeeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
     {/*<UserContainer />
         <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
         <CakeInputContainer />
        <ItemContainer cake />
        <ItemContainer /> */}

        <EmployeeContainer />

      </div>
    </Provider>
  );
}

export default App;
