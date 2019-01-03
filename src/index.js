import style from './main.css';
import keyTracking from './js/movements/handleKeys';
import {displayStartScreen} from './js/display/domElements';

window.onkeydown = keyTracking;

displayStartScreen();
