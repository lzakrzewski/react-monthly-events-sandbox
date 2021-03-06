import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import reducers from './reducers/reducers';
import Calendar from './pages/Calendar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Calendar} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));