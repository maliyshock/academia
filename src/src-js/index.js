/*eslint no-unused-vars: 0 */

'use strict';

import Swiper from 'swiper/dist/js/swiper';
import 'swiper/dist/css/swiper.css'

import $ from 'jquery';

import '../src-scss/index.scss';


// import  {dropdowns}         from './modules/dropdown.js'
import  {burger}            from './modules/burger.js'
import  {popup}             from './modules/popup.js'
import  {input}             from './modules/input.js'
// import  {tabs}              from './modules/tabs.js'
// import  {sliderInit}        from './modules/slider.js'
// import  {calculator}        from './modules/calculator.js'
// import  {accordion}         from './modules/accordion.js'

$('document').ready(function(){

    if( $('.js-stories-slider').length !== 0 ) {
        var stories = new Swiper('.js-stories-slider', {
            slidesPerView: 3,
            watchSlidesVisibility: true,
            spaceBetween: 60,
            navigation: {
                nextEl: '.js-story-button-next',
                prevEl: '.js-story-button-prev',
            },
            // Responsive breakpoints
            breakpointsInverse: true,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 0
                },
                // when window width is >= 480px
                600: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20
                },
                // when window width is >= 640px
                1240: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 60
                }
            }
        });

        stories.init();
    }

    if( $('.js-main-slider').length !== 0 ) {
        var main = new Swiper('.js-main-slider', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.js-main-button-next',
                prevEl: '.js-main-button-prev',
            },
            pagination: {
                el: '.js-main-pagination',
                type: 'fraction',
            },
        })
    }


    burger.init();
    popup.init();
    input.init();
});
