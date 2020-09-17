/***
 * Zyara's World!
 * もしもし  ٩(♡ε♡)۶
 * index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


(() => {
    const titles = [
        "♡\u205fZyara's\u205fWorld\u205f♡ ",
        "♡\u205fジシャラのせかい\u205f♡",
    ];
    console.log(titles);
})();


let app = [];

if (window.location.pathname === "/fuck") {
    app.push(<div id="fuck"/>)
}
else {
    app.push(<App key="app"/>)
}


ReactDOM.render(
    <React.StrictMode>
        { app }
    </React.StrictMode>,
    document.getElementById('root')
);
