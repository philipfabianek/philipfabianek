import React from "react";

import { Link } from "react-router-dom";

export default class Contact extends React.Component {
    componentDidMount() {
        const blocks = document.getElementsByClassName("contact__blocks__block");
        const blocksArray = Array.from(blocks);

        blocksArray.map((block, i) => {
            setTimeout(() => {
                block.classList += " contact__blocks__block--visible";
            }, i * 250 + 200);
        });
    };

    render() {
        return (
            <div className="contact">
                <h1 className="about__title">
                    CONTACT
                </h1>

                <div className="contact__blocks">
                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            GITHUB
                        </h2>

                        <p className="contact__blocks__block__description">
                            Add me on Github, view my work and contact me.
                        </p>

                        <div className="contact__blocks__hover-block">

                        </div>
                    </div>

                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            LINKEDIN
                        </h2>

                        <p className="contact__blocks__block__description">
                            Add me on LinkedIn, view my work and contact me.
                        </p>

                        <div className="contact__blocks__hover-block">

                        </div>
                    </div>

                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            SKYPE
                        </h2>

                        <p className="contact__blocks__block__description">
                            Add me on Skype, view my work and contact me.
                        </p>

                        <div className="contact__blocks__hover-block">

                        </div>
                    </div>

                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            TWITTER
                        </h2>

                        <p className="contact__blocks__block__description">
                            Follow me on Twitter and send me messages.
                        </p>

                        <div className="contact__blocks__hover-block">

                        </div>
                    </div>

                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            FACEBOOK
                        </h2>

                        <p className="contact__blocks__block__description">
                            Add me on Facebook and feel free to send me a message.
                        </p>

                        <div className="contact__blocks__hover-block">

                        </div>
                    </div>

                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            EMAIL
                        </h2>

                        <p className="contact__blocks__block__description">
                            Feel free to send me email at any time.
                        </p>

                        <div className="contact__blocks__hover-block">

                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
