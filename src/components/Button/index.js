import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  disabled = false,
  rounded = false,
  large = false,
  text = false,
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  ...passProps
}) => {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if(disabled) {
    Object.keys(props).forEach(key => {
        if(key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
        }
    })
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]:className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,

  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
};

export default Button;
