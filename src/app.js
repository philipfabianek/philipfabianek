import React from 'react';
import ReactDOM from 'react-dom';

// import "normalize.css";
import './stylesheets/styles.scss';

import AppRouter from "./routers/AppRouter";

// import browser from "./scripts/extra/browsers";

ReactDOM.render(
    <AppRouter />,
    document.getElementById("app")
);
