import React from "react";

import { Link } from "react-router-dom";

import BottomNavigation from "./reusable/BottomNavigation";

export default class Portfolio extends React.Component {
    render() {
        return (
            <div className="portfolio">
                <h1 className="about__title">
                    PORTFOLIO
                </h1>

                <div>
                    <BottomNavigation
                        currentPage="portfolio"
                    />
                </div>
            </div>
        );
    };
};
