import React, { forwardRef, Ref, ButtonHTMLAttributes } from "react";
import PropTypes from "prop-types";
import { cls } from "../utils/helpers";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "border"
    | "borderGold"
    | "borderGray";
  size?: "small" | "normal" | "large" | "square" | "normalSm";
  pill?: boolean;
  uppercase?: boolean;
  submit?: "submit" | "button";
}

interface ButtonClasses {
  base: string;
  disabled: string;
  pill: string;
  uppercase: string;
  size: {
    small: string;
    normal: string;
    normalSm: string;
    square: string;
    large: string;
  };
  variant: {
    primary: string;
    secondary: string;
    border: string;
    borderGold: string;
    borderGray: string;
    danger: string;
  };
}

const classes: ButtonClasses = {
  base: "focus:outline-none transition ease-in-out duration-300 font-medium whitespace-nowrap",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  uppercase: "uppercase",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-34 py-2 md:text-sm md:leading-[21px] tracking-[0.02em] text-sm",
    normalSm:
      "1xl:px-34 px-20 1xl:py-2 py-1 1xl:text-sm 1xl:leading-[21px] tracking-[0.02em] text-xs",
    square: "p-4",
    large: "px-8 py-3 text-lg",
  },
  variant: {
    primary:
      "bg-gold hover:bg-goldHover focus:ring-2 focus:ring-gold focus:ring-opacity-50 text-white",
    secondary:
      "bg-bej hover:bg-black focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",
    border: "bg-white hover:bg-gray4 text-gray-900 border-2 border-gray4",
    borderGold:
      "bg-white hover:bg-gray4 text-gray-900 border-2 border-goldLight",
    borderGray:
      "bg-white hover:bg-gray text-gray border-2 border-gray hover:text-white",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
};

const Button = forwardRef(
  (
    {
      children,
      type = "button",
      className = "",
      variant = "primary",
      size = "normal",
      pill,
      uppercase,
      disabled = false,
      ...props
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>
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
      {...props}>
      {children}
    </button>
  )
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.oneOf(["submit", "button"]),
  className: PropTypes.string,
  pill: PropTypes.bool,
  uppercase: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "border",
    "borderGold",
    "borderGray",
  ]),
  size: PropTypes.oneOf(["small", "normal", "large", "square", "normalSm"]),
};
Button.displayName = "Button";
export default Button;
