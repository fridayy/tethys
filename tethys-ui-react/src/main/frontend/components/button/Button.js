/**
 * Created by bnjm on 1/5/17.
 */
import React, {PropTypes} from 'react';

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
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

export default Button;