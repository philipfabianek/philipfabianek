import React from "react";

import { resetElementObjects, addElement, onScroll } from "./../scrollTransition";
import { getPosition } from "./../scrollAnimation";

import BottomNavigation from "./reusable/BottomNavigation";
import Copyright from "./reusable/Copyright";

export default class Features extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // box: undefined,
            // featuresVisible: 50
        }
    };

    componentDidMount() {
        // (
        //     addElement("features__block", "features__block--visible", 200)
        //     addElement("features__block--1", "features__block--visible", 200)
        //     addElement("features__block--2", "features__block--visible", 200)
        //     addElement("features__block--3", "features__block--visible", 200)
        //
        //     addElement("features__box", "features__box--visible", 100, (argument) => {
        //         let title = document.getElementsByClassName("features__box__title")[0];
        //         let description = document.getElementsByClassName("features__box__description")[0];
        //         let boi = document.getElementsByClassName("features__box__boi")[0];
        //
        //         if (argument === "add") {
        //             setTimeout(() => {
        //                 title.classList.add("features__box__title--visible");
        //
        //                 setTimeout(() => {
        //                     description.classList.add("features__box__description--visible");
        //                 }, 200);
        //
        //                 setTimeout(() => {
        //                     boi.classList.add("features__box__boi--visible");
        //                 }, 400);
        //             }, 1000);
        //         } else if (argument === "remove") {
        //             title.classList.remove("features__box__title--visible");
        //             description.classList.remove("features__box__description--visible");
        //             boi.classList.remove("features__box__boi--visible");
        //         };
        //     });
        //
        //     onScroll();
        //
        //     this.setState(() => ({
        //         box: "features__box"
        //     }));
        // )

        resetElementObjects();

        addElement("features__div", "features__div--visible", 200);
        addElement("features__div", "features__div--visible", 200);
        addElement("features__div", "features__div--visible", 200);

        onScroll();
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

                <div className="features__div">
                    {/* I always adjust look of the website to needs of my client and way that they fit the targeted public. This includes colors, images and overall manipulation of the website. */}
                    <h2>
                        Responsive design
                    </h2>

                    <p>
                        Every single of the websites / web applications
                        I create is responsible.
                        It looks differently on small,
                        medium and large display devices.
                        <br/>
                        <br/>
                        Since nowadays more than 50% of the traffic visits
                        our websites from their mobile devices,
                        I do follow the "Mobile First Design" -
                        it first loads resources needed
                        for smaller displays and it doesn't even load resources
                        needed for larger devices.
                        Since larger devices usually have a better performance,
                        they can also load files much faster -
                        loading all resources does not affect
                        them as much as it does affect smaller ones
                        such as smartphones.
                    </p>
                </div>

                <div className="features__div">
                    <h2>
                        Cross-browser functionality
                    </h2>

                    <p>
                        Everything that I do is made to work in all modern browsers. This is very important part of development and I do not skip that at all. This includes the most known browsers both on computer or mobile, for example Google Chrome, Mozilla Firefox, Safari, Opera, Microsoft Edge, Internet Explorer (newer versions), and much more.
                    </p>
                </div>

                <div className="features__div">
                    <h2>
                        Source code included
                    </h2>

                    <p>
                        I always include source code when I deliver my work. Not only is the project very well structured, but I do follow known patterns both in my CSS and Javasript, for example all my css properties applied on single element are in alphabetical order and I do use the BEM (block__element--modifier) pattern for applying my CSS classes.
                    </p>
                </div>

                <div>
                    <BottomNavigation
                        currentPage="features"
                    />
                </div>

                {/* <div className="features__box__container">
                    // <style>
                    //     {
                    //         `.features__box {
                    //             width: ${this.state.featuresVisible}%;\
                    //         }`
                    //     }
                    // </style>
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
                </div> */}

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
