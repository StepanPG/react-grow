import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { usersApp } from './reducers';
import { saveState, loadState } from './localStorage';

const persistedState = loadState();
const store = createStore(usersApp, persistedState);

store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
