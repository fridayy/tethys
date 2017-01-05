/**
 * Created by bnjm on 1/5/17.
 */
import React, {Component, PropTypes} from 'react';

const Button = ({children, className, label, onClick, type = 'button'}) => {
    return (
        <button
            className={className}
            aria-label={label}
            onClick={onClick}
            type={type}>
            {children}
        </button>
    )
};

Button.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    onClick: React.PropTypes.func,
    type: React.PropTypes.oneOf(['button', 'reset', 'submit'])
};

export default Button;