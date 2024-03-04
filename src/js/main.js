import marquee from 'vanilla-marquee'

const marqueeElement = document.getElementById('marquee')
if( marqueeElement ) {
    new marquee( marqueeElement, {
        duplicated: true,
        gap:        12, 
        speed:      50, 
        startVisible: true 
    } );
}