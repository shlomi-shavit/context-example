import React from "react";
import { ThemeContextConsumer } from "./ThemeContext";

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => {
                const dayStatus = context.theme === 'Day' ? '🌚' : '🌞';
                return (
                    <button onClick={context.toggleTheme} className="button">
                        Switch to
                        <span role="img"> {dayStatus}</span>
                    </button>
                )
            }}
        </ThemeContextConsumer>
    );
}

export default Button;