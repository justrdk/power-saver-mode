import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import Loans from './components/Loans';

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="ui container">
          <div className="ui one column centered grid">
            <div className="row">
              <h2 className="ui header"> Current Loans </h2>
            </div>
            <Loans />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
