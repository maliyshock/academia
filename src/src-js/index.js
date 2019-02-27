/*eslint no-unused-vars: 0 */

'use strict';

import 'swiper/dist/css/swiper.css'

import $ from 'jquery';

import '../src-scss/index.scss';

// import googleMapsClient     from '@google/maps'
import ymaps from 'ymaps';


// import  {dropdowns}         from './modules/dropdown.js'
import  {burger}            from './modules/burger.js'
import  {popup}             from './modules/popup.js'
import  {input}             from './modules/input.js'
import  createSwiper        from './modules/swiper.js'
import  {tabs}              from './modules/tabs.js'
// import  {sliderInit}        from './modules/slider.js'
// import  {calculator}        from './modules/calculator.js'
import  {cardodion}         from './modules/cardodion.js'
import  {accordion}         from './modules/accordion.js'
import  {video}             from './modules/video.js'

$('document').ready(function(){

    var stories = createSwiper(
            '.js-stories-slider',
            {
                watchSlidesVisibility: true,
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
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    600: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    // when window width is >= 640px
                    1240: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 60
                    }
                }
            });

    var events = createSwiper(
            '.js-events-slider',
            {
                watchSlidesVisibility: true,
                navigation: {
                    nextEl: '.js-events-button-next',
                    prevEl: '.js-events-button-prev',
                },
                // Responsive breakpoints
                breakpointsInverse: true,
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    600: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 30
                    },
                    960: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 40
                    },
                    // when window width is >= 640px
                    1240: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 60
                    }
                }
            });

    var main = createSwiper(
        '.js-main-slider',
        {
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            navigation: {
                nextEl: '.js-main-button-next',
                prevEl: '.js-main-button-prev',
            },
            pagination: {
                el: '.js-main-pagination',
                type: 'fraction',
            },
        }
    );

    var students = createSwiper(
        '.js-students-slider',
        {
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            navigation: {
                nextEl: '.js-students-button-next',
                prevEl: '.js-students-button-prev',
            },
            pagination: {
                el: '.js-students-pagination',
                type: 'fraction',
            },
        }
    );

    var reviews = createSwiper(
        '.js-reviews-slider',
        {
            spaceBetween: 20,
            breakpointsInverse: true,
            autoHeight: true,
            navigation: {
                nextEl: '.js-reviews-button-next',
                prevEl: '.js-reviews-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                960: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                }
            }
        }
    );

    tabs.init();
    video.init();
    accordion.init();
    cardodion.init();
    burger.init();
    popup.init();
    input.init();
});
