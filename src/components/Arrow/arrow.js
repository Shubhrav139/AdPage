import PropTypes from "prop-types";
import React from "react";

export default function Arrowdown({
    className,
    arrowdown = "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/arrowdown-2.svg",
}) {
    return <img className={`arrowdown ${className}`} alt="Arrowdown" src={arrowdown} />;
};

Arrowdown.propTypes = {
    arrowdown: PropTypes.string,
};
