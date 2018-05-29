import React from "react";

import { Link } from "react-router-dom";

import BottomNavigation from "./reusable/BottomNavigation";

import Github from "./../../public/images/social-icons/github.png";
import LinkedIn from "./../../public/images/social-icons/linkedin.png";
import Skype from "./../../public/images/social-icons/skype.png";
import Twitter from "./../../public/images/social-icons/twitter.png";
import Facebook from "./../../public/images/social-icons/facebook.png";
import Email from "./../../public/images/social-icons/email.png";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoveredBlock: undefined
        };
    };

    componentDidMount() {
        const blocks = document.getElementsByClassName("contact__blocks__block");
        const blocksArray = Array.from(blocks);

        const scroll = document.documentElement.scrollTop;

        if (scroll > 300) {
            blocksArray.map((block) => {
                block.className += " contact__blocks__block--visible";
            });
        } else {
            blocksArray.map((block, i) => {
                setTimeout(() => {
                    block.className += " contact__blocks__block--visible";
                }, i * 250 + 200);
            });
        }

        blocksArray.map((block, i) => {
            block.addEventListener("mouseenter", () => {
                // console.log("ENTER ", i);
                this.setState(() => ({
                    hoveredBlock: i
                }));
            });

            block.addEventListener("mouseleave", () => {
                // console.log("LEAVE ", i);
            });
        });

        blocksArray.map((block, i) => {
            block.classList.remove("contact__blocks__block--toggled");

            if (i === this.state.hoveredBlock) {
                block.classList.add("contact__blocks__block--toggled");
            }
        });
    };

    onFormSubmit(event) {
        event.preventDefault();
        const button = document.getElementsByClassName("contact__message__button")[0];

        button.classList.add("contact__message__button--sent");

        setTimeout(() => {
            button.classList.remove("contact__message__button--sent");
        }, 1000);
    };

    onCopyLink(inputClassName, event) {
        const button = event.target;
        const target = document.getElementsByClassName(inputClassName)[0];

        button.classList.toggle("contact__blocks__hover-block__button--copied");
        button.disabled = true;

        setTimeout(() => {
            button.classList.toggle("contact__blocks__hover-block__button--copied");
            button.disabled = false;
        }, 1000);

        target.select();
        document.execCommand("copy");
    };

    render() {
        const blocks = document.getElementsByClassName("contact__blocks__block");
        const blocksArray = Array.from(blocks);

        blocksArray.map((block, i) => {
            block.classList.remove("contact__blocks__block--toggled");

            if (i === this.state.hoveredBlock) {
                block.classList.add("contact__blocks__block--toggled");
            }
        });

        return (
            <div className="contact">
                <h1 className="about__title">
                    CONTACT
                </h1>

                <div className="contact__blocks">
                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            EMAIL
                        </h2>

                        <div className="contact__blocks__hover-block">
                            <img src={Email} className="contact__blocks__hover-block__icon contact__blocks__hover-block__icon--email" />
                            <p className="contact__blocks__hover-block__description">
                                Feel free to send me email at any time.
                            </p>
                            <h2 className="contact__blocks__hover-block__bold-text">
                                fabianekphilip@gmail.com
                            </h2>
                            {/* <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--copy"
                                onClick={this.onCopyLink.bind(this, "contact__blocks__hover-block__input--email")}
                            >
                                COPY EMAIL
                            </button>
                            <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--visit"
                            >
                                <a
                                    className="contact__blocks__hover-block__button contact__blocks__hover-block__button--visit"
                                    href="https://www.linkedin.com/in/philip-fabianek"
                                    target="_blank"
                                >
                                    VISIT PAGE
                                </a>
                            </button> */}

                            <input
                                className="contact__blocks__hover-block__input contact__blocks__hover-block__input--email"
                                onChange={() => {}}
                                readOnly
                                type="text"
                                value="fabianekphilip@gmail.com"
                            />
                        </div>
                    </div>

                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            LINKEDIN
                        </h2>

                        <div className="contact__blocks__hover-block">
                            <img src={LinkedIn} className="contact__blocks__hover-block__icon contact__blocks__hover-block__icon--linkedin" />
                            <p className="contact__blocks__hover-block__description">
                                Add me on LinkedIn, view my work and contact me.
                            </p>
                            <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--copy"
                                onClick={this.onCopyLink.bind(this, "contact__blocks__hover-block__input--linkedin")}
                            >
                                COPY LINK
                            </button>
                            {/* <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--visit"
                                > */}
                                <a
                                    className="contact__blocks__hover-block__button contact__blocks__hover-block__button--visit"
                                    href="https://www.linkedin.com/in/philip-fabianek"
                                    target="_blank"
                                    title="Visit my LinkedIn profile"
                                >
                                    VISIT PAGE
                                </a>
                            {/* </button> */}

                            <input
                                className="contact__blocks__hover-block__input contact__blocks__hover-block__input--linkedin"
                                onChange={() => {}}
                                readOnly
                                type="text"
                                value="https://www.linkedin.com/in/philip-fabianek"
                            />
                        </div>
                    </div>

                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            GITHUB
                        </h2>

                        <div className="contact__blocks__hover-block">
                            <img src={Github} className="contact__blocks__hover-block__icon contact__blocks__hover-block__icon--github" />
                            <p className="contact__blocks__hover-block__description">
                                Add me on Github, view my work and contact me.
                            </p>
                            <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--copy"
                                onClick={this.onCopyLink.bind(this, "contact__blocks__hover-block__input--github")}
                            >
                                COPY LINK
                            </button>
                            {/* <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--visit"
                            > */}
                                <a
                                    className="contact__blocks__hover-block__button contact__blocks__hover-block__button--visit"
                                    href="https://github.com/philipfabianek"
                                    target="_blank"
                                    title="Visit my Github page"
                                >
                                    VISIT PAGE
                                </a>
                            {/* </button> */}

                            <input
                                className="contact__blocks__hover-block__input contact__blocks__hover-block__input--github"
                                onChange={() => {}}
                                readOnly
                                type="text"
                                value="https://github.com/philipfabianek"
                            />
                        </div>
                    </div>

                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            SKYPE
                        </h2>

                        <div className="contact__blocks__hover-block">
                            <img src={Skype} className="contact__blocks__hover-block__icon contact__blocks__hover-block__icon--skype" />
                            <p className="contact__blocks__hover-block__description">
                                Add me on Skype, view my work and contact me.
                            </p>
                            {/* <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--copy"
                            >
                                COPY LINK
                            </button>
                            <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--visit"
                            >
                                VISIT PAGE
                            </button> */}
                            <h2 className="contact__blocks__hover-block__bold-text contact__blocks__hover-block__bold-text--larger">
                                Philip Fabianek
                            </h2>
                        </div>
                    </div>

                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            FACEBOOK
                        </h2>

                        <div className="contact__blocks__hover-block">
                            <img src={Facebook} className="contact__blocks__hover-block__icon contact__blocks__hover-block__icon--facebook" />
                            <p className="contact__blocks__hover-block__description">
                                Add me on Facebook and feel free to send me a message.
                            </p>
                            <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--copy"
                                onClick={this.onCopyLink.bind(this, "contact__blocks__hover-block__input--facebook")}
                            >
                                COPY LINK
                            </button>
                            {/* <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--visit"
                            > */}
                                <a
                                    className="contact__blocks__hover-block__button contact__blocks__hover-block__button--visit"
                                    href="https://www.facebook.com/philip.fabianek.5"
                                    target="_blank"
                                    title="Visit my Facebook profile"
                                >
                                    VISIT PAGE
                                </a>
                            {/* </button> */}

                            <input
                                className="contact__blocks__hover-block__input contact__blocks__hover-block__input--facebook"
                                onChange={() => {}}
                                readOnly
                                type="text"
                                value="https://www.facebook.com/philip.fabianek.5"
                            />
                        </div>
                    </div>

                    <div className="contact__blocks__block">
                        <h2 className="contact__blocks__block__title">
                            TWITTER
                        </h2>

                        <div className="contact__blocks__hover-block">
                            <img src={Twitter} className="contact__blocks__hover-block__icon contact__blocks__hover-block__icon--twitter" />
                            <p className="contact__blocks__hover-block__description">
                                Follow me on Twitter and send me messages.
                            </p>
                            <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--copy"
                                onClick={this.onCopyLink.bind(this, "contact__blocks__hover-block__input--twitter")}
                            >
                                COPY LINK
                            </button>
                            {/* <button
                                className="contact__blocks__hover-block__button contact__blocks__hover-block__button--visit"
                            > */}
                                <a
                                    className="contact__blocks__hover-block__button contact__blocks__hover-block__button--visit"
                                    href="https://twitter.com/philip_fabianek"
                                    target="_blank"
                                    title="Visit my Twitter feed"
                                >
                                    VISIT PAGE
                                </a>
                            {/* </button> */}

                            <input
                                className="contact__blocks__hover-block__input contact__blocks__hover-block__input--twitter"
                                onChange={() => {}}
                                readOnly
                                type="text"
                                value="https://twitter.com/philip_fabianek"
                            />
                        </div>
                    </div>

                </div>

                {/* <div className="contact__message">
                    <form
                        autoComplete="on"
                        onSubmit={this.onFormSubmit.bind(this)}
                    >
                        <input
                            name="fullname"
                            placeholder="Full Name"
                            type="text"
                        />

                        <input
                            name="email"
                            placeholder="Email"
                            type="email"
                        />

                        <input
                            name="phone"
                            placeholder="Phone Number (with area code)"
                            type="tel"
                        />

                        <textarea
                            name="emailBody"
                            placeholder="Message"
                            type="text"
                        />

                        <button
                            className="contact__message__button"
                        >
                            SEND
                        </button>
                    </form>
                </div> */}

                <div>
                    <BottomNavigation
                        currentPage="contact"
                    />
                </div>
            </div>
        );
    };
};
