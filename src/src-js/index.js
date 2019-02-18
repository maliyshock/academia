/*eslint no-unused-vars: 0 */

'use strict';

import $ from 'jquery';

import '../src-scss/index.scss';


// import  {dropdowns}         from './modules/dropdown.js'
import  {burger}            from './modules/burger.js'
// import  {tabs}              from './modules/tabs.js'
// import  {sliderInit}        from './modules/slider.js'
// import  {calculator}        from './modules/calculator.js'
// import  {accordion}         from './modules/accordion.js'

$('document').ready(function(){

    burger.init();
});
