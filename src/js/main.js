import marquee from 'vanilla-marquee'
import Splide from '@splidejs/splide';
import noUiSlider from 'nouislider';
//import '@splidejs/splide/dist/css/splide.min.css';
//import 'nouislider/dist/nouislider.min.css';

const marqueeElement = document.getElementById('marquee')
if( marqueeElement ) {
    new marquee( marqueeElement, {
        duplicated: true,
        gap:        12, 
        speed:      50, 
        startVisible: true 
    })
}
if( document.getElementById('login-slider') ) {
    const authGallery = new Splide( '#login-slider', {
        perPage   : 1,
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
        drag      : false
    }).mount();

    const gotoLinks = document.querySelectorAll('.js-goto-link')
    gotoLinks.forEach(function(gotoLink) {
        gotoLink.addEventListener('click', function(e) {
            e.preventDefault();
            let page = this.dataset.page*1
            authGallery.go(page);
        });
    });
}
if( document.getElementById('portfolio-gallery') ) {
    const mainGallery = new Splide( '#portfolio-gallery', {
        type      : 'slide',
        rewind    : true,
        pagination: false,
        arrows    : false,
    })
    const thumbGallery = new Splide( '#portfolio-thumb-gallery', {
        perPage   : 6,
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

const dropAreas = document.querySelectorAll('.drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropAreas.forEach(dropArea => {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
  dropAreas.forEach(dropArea => {
    dropArea.addEventListener(eventName, highlight, false);
  });
  
});

['dragleave', 'drop'].forEach(eventName => {
  dropAreas.forEach(dropArea => {
    dropArea.addEventListener(eventName, unhighlight, false);
  });
});

function highlight(e) {
  e.target.classList.add('highlight');
}

function unhighlight(e) {
  e.target.classList.remove('highlight');
}

dropAreas.forEach(dropArea => {
  dropArea.addEventListener('drop', function(e) {
    handleDrop(e, this);
  }, false);
});

function handleDrop(e, dropArea) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files, dropArea);
}

function handleFiles(files, dropArea) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        const imagePreview = dropArea.querySelector('.js-image-preview')
        console.log( dropArea )
        if(imagePreview) {
          imagePreview.innerHTML = '';
          imagePreview.appendChild(img);
          dropArea.classList.add('loaded');
        } else if(dropArea.dataset.imagepreview) {
          console.log('imagepreview')
          const extImagePreview = document.getElementById(dropArea.dataset.imagepreview)
          if(extImagePreview) {
              extImagePreview.appendChild(img);
          }
        }
      }
      reader.readAsDataURL(file);
    }
  }
}

const filesElems = document.querySelectorAll('.js-file-elem')
filesElems.forEach( fileElem => {
    fileElem.addEventListener('change', function(e) {
        const files = this.files;
        console.log( files );
        console.log( this.parentNode );
        handleFiles(files, this.parentNode);
    });
})

const ranges = document.querySelectorAll('.js-range')
if( ranges ) {
  ranges.forEach( rangeItem => {
    initRangeItem(rangeItem)
  })
}

const addService = document.getElementById('js-add-profile-service')
if( addService ) {
  addService.addEventListener('click', function(e) {
    e.preventDefault()
    const row = document.querySelector(".profile-portfolio-price .row").cloneNode(true)
    row.querySelector('textarea').value = ''
    let rowsCount = document.querySelectorAll(".profile-portfolio-price .row").length
    rowsCount++
    if( rowsCount < 10 ) {
      rowsCount = "0" + rowsCount
    }
    row.querySelector('.num').innerHTML = rowsCount
    const newRangeItems = row.querySelectorAll('.js-range')
    newRangeItems.forEach( rangeItem => {
      rangeItem.querySelector('.noUi-base').remove()
      initRangeItem(rangeItem)
    })
    const parent = document.querySelector(".profile-portfolio-price");
    parent.insertBefore(row, addService.parentNode)
  })
}

function formatNumber(number) {
  var str = number.toString();
  str = str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

  return str;
}

function initRangeItem( rangeItem ) {
  let minVal = parseInt( rangeItem.dataset.min )
  let maxVal = parseInt( rangeItem.dataset.max )
  let minCurrVal = parseInt( rangeItem.dataset.currmin )
  let maxCurrVal = parseInt( rangeItem.dataset.currmax )
  let step = parseInt( rangeItem.dataset.step )
  noUiSlider.create(rangeItem, {
    start: [minCurrVal, maxCurrVal],
    connect: true,
    step: step,
    range: {
        'min': minVal,
        'max': maxVal
    }
  })
  rangeItem.noUiSlider.on('update', function (values, handle) {
    this.target.nextElementSibling.querySelector('.js-data-min').value = formatNumber(parseInt(values[0]))
    this.target.nextElementSibling.querySelector('.js-data-max').value = formatNumber(parseInt(values[1]))
  });
  rangeItem.nextElementSibling.querySelectorAll('input').forEach(function(input, handle) {
    input.addEventListener('change', function () {
      const val = parseInt(this.value.replace(/\s+/g, ''));
      rangeItem.noUiSlider.setHandle(handle, val);
    });
  })
}