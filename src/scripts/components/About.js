import React from "react";

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

                        <p className="about__block__description">
                            My goal is to make you
                            - my customer -
                            100% happy with the product.
                            Even if it comprises requirements behind the line,
                            I am willing to go there,
                            because in the end,
                            this is what really matters.

                            <br/>
                            <br/>

                            I stand behind each and every of my words.
                            There is no reason to skew any information,
                            because the whole point of business interaction
                            is to make both sides as satisfied as possible.

                            <br/>
                            <br/>

                            The pricing is always the unsure factor,
                            but I strive to make it as reasonable as possible.
                            I have 2 types of pricings
                            - one for smaller projects,
                            and  for the larger ones.
                            The first divides the value into two payments.
                            One happens in the middle of the job
                            (after you see the prime results)
                            and one after it's all completed.

                            <br/>
                            <br/>
                        </p>

                    </div>

                    <div className="about__block about__block--right">

                        <h1 className="about__block__title">
                            PASSIONATE
                        </h1>

                    </div>

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
