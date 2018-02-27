import React from "react";

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: undefined
        };
    };

    changeLandingPage(event) {
        const element = document.getElementsByClassName("landing-page")[0];
        element.className += " landing-page--clicked";

        const option1 = document.getElementsByClassName("landing-page__postcontent__option__1")[0];
        const option2 = document.getElementsByClassName("landing-page__postcontent__option__2")[0];
        const option3 = document.getElementsByClassName("landing-page__postcontent__option__3")[0];
        const option4 = document.getElementsByClassName("landing-page__postcontent__option__4")[0];

        const options = [option1, option2, option3, option4];

        setTimeout(() => {
            options.map((option, i) => {
                const index = i + 1;
                setTimeout(() => {
                    option.className += " landing-page__postcontent__option--visible";
                    setTimeout(() => {
                        option.setAttribute("completed", true);
                    }, 1600 + (4 - index) * 300);
                }, index * 300);
            });
        }, 1600);
    };

    setPage(optionIndex, route) {
        const elements = document.getElementsByClassName("landing-page__postcontent__option");
        const elementsArray = Array.prototype.slice.call(elements);

        if (!elementsArray[0].hasAttribute("choosed") && elementsArray[0].hasAttribute("completed")) {
            elementsArray.map((element, index) => {
                if (index !== optionIndex) {
                    element.className += " landing-page__postcontent__option--not-choosed";
                    element.setAttribute("choosed", false);
                } else {
                    element.className += ` landing-page__postcontent__option--choosed landing-page__postcontent__option--choosed--${optionIndex + 1}`;
                    element.setAttribute("choosed", true);
                };
            });

            setTimeout(() => {
                this.props.history.push(route);
            }, 1190);
        }
    };

    render() {
        return (
            <div className="landing-page">

                <div className="landing-page__precontent">
                    <div className="landing-page__image"></div>
                    <div className="landing-page__block">

                        <h1 className="landing-page__title">
                            Philip Fabianek
                        </h1>

                        <h2 className="landing-page__subtitle">
                            web developer
                        </h2>

                        <button className="landing-page__button" onClick={this.changeLandingPage.bind(this)}>
                            Explore
                        </button>

                    </div>
                </div>

                <div className="landing-page__postcontent">
                    <div className="landing-page__image-behind">

                        <div className="landing-page__postcontent__options">

                            <div
                                className="landing-page__postcontent__option landing-page__postcontent__option__1"
                                onClick={this.setPage.bind(this, 0, "/about")}
                            >
                                About Me
                            </div>

                            <div
                                className="landing-page__postcontent__option landing-page__postcontent__option__2"
                                onClick={this.setPage.bind(this, 1, "/features")}
                            >
                                Features
                            </div>

                            <div
                                className="landing-page__postcontent__option landing-page__postcontent__option__3"
                                onClick={this.setPage.bind(this, 2, "/portfolio")}
                            >
                                Portfolio
                            </div>

                            <div
                                className="landing-page__postcontent__option landing-page__postcontent__option__4"
                                onClick={this.setPage.bind(this, 3, "/contact")}
                            >
                                Contact
                            </div>

                        </div>

                    </div>
                </div>

                <p className="landing-page__copyright">
                    ©&nbsp;{new Date().getFullYear()}&nbsp;All&nbsp;rights&nbsp;reserved
                </p>

            </div>
        )
    };
};
