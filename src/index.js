import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';

import TestButton from './Components/TestButton';
import Login from './Components/Login';

window.addEventListener("load", () => {
    ReactDOM.render(
        <React.Fragment>
            <div className="test-btn-container">
                <TestButton />
            </div>            
            <Login />            
        </React.Fragment>
        , document.getElementById('app'));
});

serviceWorker.unregister();
