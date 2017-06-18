/**
 * We need this main function to correctly exports drawerr
 * see http://siawyoung.com/coding/javascript/exporting-es6-modules-as-single-scripts-with-webpack.html
 */
import Drawerr from './drawerr';

window.drawerr = Drawerr;

module.exports = Drawerr;