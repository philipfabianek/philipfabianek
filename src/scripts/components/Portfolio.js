import React from "react";

import BottomNavigation from "./reusable/BottomNavigation";
import Copyright from "./reusable/Copyright";

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
