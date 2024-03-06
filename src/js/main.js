import marquee from 'vanilla-marquee'
import Splide from '@splidejs/splide';

const marqueeElement = document.getElementById('marquee')
if( marqueeElement ) {
    new marquee( marqueeElement, {
        duplicated: true,
        gap:        12, 
        speed:      50, 
        startVisible: true 
    } );
}

if( document.getElementById('portfolio-gallery') ) {
    const mainGallery = new Splide( '#portfolio-gallery', {
        type      : 'slide',
        rewind    : true,
        pagination: false,
        arrows    : false,
    })
    const thumbGallery = new Splide( '#portfolio-thumb-gallery', {
        perPage: 6,
        gap       : 12,
        rewind    : true,
        pagination: false,
        arrows: false,
        isNavigation: true,
        breakpoints: {
            /*900: {
                perPage: 4,
                gap: 6,
                padding: { left: 30, right: 30 }
            },*/
            600: {
                gap: 4
            }
        }
    })
    mainGallery.sync( thumbGallery );
    mainGallery.mount();
    thumbGallery.mount();
}