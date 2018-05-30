import React from "react";

import ContactBlocks from "./contact/ContactBlocks";
import Message from "./contact/Message";

import BottomNavigation from "./reusable/BottomNavigation";
import Copyright from "./reusable/Copyright";

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

                <ContactBlocks />
                {/* <Message /> */}

                <div>
                    <BottomNavigation
                        currentPage="contact"
                    />
                </div>

                <Copyright />
            </div>
        );
    };
};
