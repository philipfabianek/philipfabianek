import React from "react";

import { addElement, onScroll } from "./../scrollTransition";
import { getPosition } from "./../scrollAnimation";

import { Link } from "react-router-dom";

import BottomNavigation from "./reusable/BottomNavigation";

export default class Features extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // box: undefined,
            // featuresVisible: 50
        }
    };

    componentDidMount() {
        // addElement("features__block", "features__block--visible", 200)
        // addElement("features__block--1", "features__block--visible", 200)
        // addElement("features__block--2", "features__block--visible", 200)
        // addElement("features__block--3", "features__block--visible", 200)

        addElement("features__box", "features__box--visible", 100, (argument) => {
            let title = document.getElementsByClassName("features__box__title")[0];
            let description = document.getElementsByClassName("features__box__description")[0];
            let boi = document.getElementsByClassName("features__box__boi")[0];

            if (argument === "add") {
                setTimeout(() => {
                    title.classList.add("features__box__title--visible");

                    setTimeout(() => {
                        description.classList.add("features__box__description--visible");
                    }, 200);

                    setTimeout(() => {
                        boi.classList.add("features__box__boi--visible");
                    }, 400);
                }, 1000);
            } else if (argument === "remove") {
                title.classList.remove("features__box__title--visible");
                description.classList.remove("features__box__description--visible");
                boi.classList.remove("features__box__boi--visible");
            };
        });

        onScroll();

        // this.setState(() => ({
        //     box: "features__box"
        // }));
    };

    render() {
        window.onscroll = () => {
            onScroll();

            // this.setState(() => ({
            //     featuresVisible: 50 + getPosition("features__box") * 0.5
            // }));
        };

        return (
            <div className="features">
                <h1 className="about__title">
                    FEATURES
                </h1>
                <div className="features__box__container">
                    {/* <style>
                        {
                            `.features__box {
                                width: ${this.state.featuresVisible}%;\
                            }`
                        }
                    </style> */}
                    <div className="features__box">
                        <h1 className="features__box__title">Hello There</h1>
                        <h2 className="features__box__description">
                            Welcome, welcome. Sit down please. Just don't hurry,
                            take your time, take your time...
                        </h2>
                        <h3 className="features__box__boi">
                            Holy Tony in the building
                        </h3>
                    </div>
                </div>

                <div>
                    <BottomNavigation
                        currentPage="features"
                    />
                </div>

                {/* <div className="features__block"></div>
                <div className="features__block features__block--1">
                    <div className="features__textbox">
                        <p>
                            Hello there,<br/>
                            welcome to this page
                        </p>
                    </div>
                </div>
                <div className="features__block features__block--2">
                    <div className="features__textbox">
                        <p>
                            Hello there,<br/>
                            welcome to this page
                        </p>
                    </div>
                </div>
                <div className="features__block features__block--3">
                    <div className="features__textbox">
                        <p>
                            Hello there,<br/>
                            welcome to this page
                        </p>
                    </div>
                </div>
                <div className="features__block"></div> */}
            </div>
        );
    };
};
