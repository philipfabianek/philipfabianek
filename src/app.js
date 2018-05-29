// Polyfills
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import "./scripts/polyfill";

// Styles
// import "aos/dist/aos.css";
// import "aos/dist/aos.js";
import './stylesheets/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from "./routers/AppRouter";

ReactDOM.render(
    <AppRouter />,
    document.getElementById("app")
);
