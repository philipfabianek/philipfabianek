import React from "react";

import { Link } from "react-router-dom";

import Professional from "./about/Professional";
import Passionate from "./about/Passionate";

import BottomNavigation from "./reusable/BottomNavigation";

export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1 className="about__title">
                    ABOUT ME
                </h1>

                <div className="about__blocks">

                    <div className="about__block about__block--right">

                        <Passionate />

                    </div>

                    <div className="about__block about__block--left">

                        <Professional />

                    </div>

                </div>

                <div>
                    <BottomNavigation
                        currentPage="about"
                    />
                </div>

                <div className="about__copyright">
                    <p className="about__copyright__text">
                        WEBSITE&nbsp;DEVELOPED&nbsp;BY PHILIP&nbsp;FABIANEK ©&nbsp;{new Date().getFullYear()}
                    </p>
                </div>
            </div>
        );
    };
};
