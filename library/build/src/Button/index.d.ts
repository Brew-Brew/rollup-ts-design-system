import React from "react";
export declare enum ButtonType {
    DEFAULT = "default",
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export interface IProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler;
    theme?: ButtonType;
}
declare const Button: React.FC<IProps>;
export default Button;
