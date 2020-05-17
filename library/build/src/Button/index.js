import React$1 from 'react';
import styles from './style.module.scss.js';

var ButtonType;
(function (ButtonType) {
    ButtonType["DEFAULT"] = "default";
    ButtonType["PRIMARY"] = "primary";
    ButtonType["SECONDARY"] = "secondary";
})(ButtonType || (ButtonType = {}));
var Button = function (_a) {
    var children = _a.children;
    return React$1.createElement("button", { className: styles.default }, children);
};

export default Button;
export { ButtonType };
//# sourceMappingURL=index.js.map
