import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';

import TestButton from './Components/TestButton';

window.addEventListener("load", () => {
    ReactDOM.render(<TestButton />, document.getElementById('app'));
});

serviceWorker.unregister();
