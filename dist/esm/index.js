"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _drawerr = _interopRequireDefault(require("./drawerr"));

var _drawerrMultilevel = _interopRequireDefault(require("./drawerrMultilevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * We need this main function to correctly exports drawerr
 * see http://siawyoung.com/coding/javascript/exporting-es6-modules-as-single-scripts-with-webpack.html
 */
var _default = {
  Drawerr: _drawerr.default,
  DrawerrMultilevel: _drawerrMultilevel.default
};
exports.default = _default;
window.drawerr = _drawerr.default;
window.drawerrMultilevel = _drawerrMultilevel.default;
//# sourceMappingURL=index.js.map