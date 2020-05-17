import React from "react";

import styles from "./style.module.scss";

export enum ButtonType {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface IProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  theme?: ButtonType;
}

const Button: React.FC<IProps> = ({ children }) => {
  return <button className={styles.default}>{children}</button>;
};

export default Button;
