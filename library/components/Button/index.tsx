import React from "react";
import classNames from "classnames";

import styles from "./style.module.scss";

export enum ButtonType {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface IProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  theme?: ButtonType;
}

const Button: React.FC<IProps> = ({ children, theme = ButtonType.DEFAULT }) => {
  const classNameProps = classNames(styles.default, styles[theme]);
  return <button className={classNameProps}>{children}</button>;
};

export default Button;
