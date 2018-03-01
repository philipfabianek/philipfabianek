import React from "react";

import Trustworthy from "./../../../public/images/icons/trustworthy.png";
import Pricing from "./../../../public/images/icons/pricing.png";

export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1 className="about__title">
                    ABOUT ME
                </h1>

                <div className="about__blocks">

                    <div className="about__block about__block--left">

                        <h1 className="about__block__title">
                            PROFESSIONAL
                        </h1>

                        <p className="about__block__description about__block__description--first">
                            My goal is to make you
                            - my customer -
                            100% happy with the product.
                            Even if it comprises requirements behind the line,
                            I am willing to go there,
                            because in the end,
                            this is what really matters.
                        </p>

                        <img
                            className="about__block__icon about__block__icon--trustworthy"
                            src={Trustworthy}
                        />

                        <p className="about__block__description">
                            I stand behind each and every of my words.
                            There is no reason to skew any information,
                            because the whole point of business interaction
                            is to make both sides as satisfied as possible.
                        </p>

                        <img
                            className="about__block__icon about__block__icon--pricing"
                            src={Pricing}
                        />

                        <p className="about__block__description">
                            The pricing is always the unsure factor,
                            but I strive to make it as reasonable as possible.
                            I use only 1 type of pricing for all of my projects.
                            It's called the 33 / 33 / 33 rule
                            and you might guess it straight from the name
                            - I get 33% before the project starts
                            (but after I recieve all of the information),
                            33% in the middle of the job
                            (but after you see some prime results)
                            and 33% after it's all completed.
                        </p>

                    </div>

                    <div className="about__block about__block--right">

                        <h1 className="about__block__title">
                            PASSIONATE
                        </h1>

                    </div>

                </div>

                <div className="about__redirect">
                    <button
                        className="about__redirect__item"
                        onClick={this.props.transition.bind(this, "-100vw", "/features", "0")}
                    >
                        FEATURES
                    </button>

                    <button
                        className="about__redirect__item"
                        onClick={this.props.transition.bind(this, "-200vw", "/portfolio", "0")}
                    >
                        PORTFOLIO
                    </button>

                    <button
                        className="about__redirect__item"
                        onClick={this.props.transition.bind(this, "-300vw", "/contact", "0")}
                    >
                        CONTACT
                    </button>
                </div>

                <div className="about__copyright">
                    <p className="about__copyright__text">
                        ©&nbsp;{new Date().getFullYear()}&nbsp;All&nbsp;rights&nbsp;reserved
                    </p>
                </div>
            </div>
        );
    };
};
