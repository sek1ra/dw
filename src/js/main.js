import marquee from 'vanilla-marquee'
import Splide from '@splidejs/splide';

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
        if(imagePreview) {
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
            dropArea.classList.add('loaded');
        } else if(dropArea.dataset.imagepreview) {
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


const filesElems = document.querySelectorAll('js-file-elem')
filesElems.forEach( fileElem => {
    fileElem.addEventListener('change', function(e) {
        const files = this.files;
        handleFiles(files, this);
    });
})