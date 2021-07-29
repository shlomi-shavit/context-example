import React from "react";
import Button from "./Button";
import "./style.css";
import {ThemeContextConsumer} from "./ThemeContext";

function Image(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-image image`}>
                    <div className={`${context.theme}-ball ball`} />
                    <Button />
                </div>
            )}
        </ThemeContextConsumer>
    );
}

Image.contextType = ThemeContextConsumer;

export default Image;