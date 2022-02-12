import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import {Provider} from "react-redux";
import React from "react";
import reduxThunk from 'redux-thunk'


const Root = ({children, initialState = {}}) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxThunk))

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Root