import React from "react";

const Button = (props) => {

    const {
        children, className
    } = props;

    return (
        <button type="button" {...props}>
            {children}
        </button>
    );
}

export default Button;