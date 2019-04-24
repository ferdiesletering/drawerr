/**
 * We need this main function to correctly exports drawerr
 * see http://siawyoung.com/coding/javascript/exporting-es6-modules-as-single-scripts-with-webpack.html
 */
import Drawerr from './drawerr';
import DrawerrMultilevel from 'drawerr';

export default {
    Drawerr,
    DrawerrMultilevel
}

window.drawerr = Drawerr;
window.drawerrMultilevel = DrawerrMultilevel;
