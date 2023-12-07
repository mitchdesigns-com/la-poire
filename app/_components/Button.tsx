import React, { forwardRef, Ref, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { cls } from '../utils/helpers'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'normal' | 'large';
    pill?: boolean;
    uppercase?: boolean;
    submit?: 'submit' | 'button';
}

interface ButtonClasses {
    base: string;
    disabled: string;
    pill: string;
    uppercase: string;
    size: {
        small: string;
        normal: string;
        large: string;
    };
    variant: {
        primary: string;
        secondary: string;
        danger: string;
    };
}

const classes: ButtonClasses = {
    base: 'focus:outline-none transition ease-in-out duration-300 font-medium tracking-[0.01em]',
    disabled: 'opacity-50 cursor-not-allowed',
    pill: 'rounded-full',
    uppercase: 'uppercase',
    size: {
        small: 'px-2 py-1 text-sm',
        normal: 'px-20 py-2 md:text-base text-sm',
        large: 'px-8 py-3 text-lg'
    },
    variant: {
        primary: 'bg-gold hover:bg-goldHover focus:ring-2 focus:ring-gold focus:ring-opacity-50 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
        danger: 'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white'
    }
}

const Button = forwardRef(
    (
        {
            children,
            type = 'button',
            className,
            variant = 'primary',
            size = 'normal',
            pill,
            uppercase,
            disabled = false,
            ...props
        }: ButtonProps, ref: Ref<HTMLButtonElement>
    ) => (
        <button
            ref={ref}
            disabled={disabled}
            type={type}
            className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${uppercase && classes.uppercase}
                ${disabled && classes.disabled}
                ${className}
            `)}
            {...props}
        >
            {children}
        </button>
    ));

Button.propTypes = {
    children: PropTypes.node.isRequired,
    submit: PropTypes.oneOf(['submit', 'button']),
    className: PropTypes.string,
    pill: PropTypes.bool,
    uppercase: PropTypes.bool,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    size: PropTypes.oneOf(['small', 'normal', 'large']),
}
Button.displayName = 'Button';
export default Button;
