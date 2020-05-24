import React$1 from 'react';
import classnames from '../../node_modules/classnames/index.js';
import styles from './style.module.scss.js';

var ButtonType;
(function (ButtonType) {
    ButtonType["DEFAULT"] = "default";
    ButtonType["PRIMARY"] = "primary";
    ButtonType["SECONDARY"] = "secondary";
})(ButtonType || (ButtonType = {}));
var Button = function (_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? ButtonType.DEFAULT : _b;
    var classNameProps = classnames(styles.default, styles[theme]);
    return React$1.createElement("button", { className: classNameProps }, children);
};

export default Button;
export { ButtonType };
//# sourceMappingURL=index.js.map
