import 'parsleyjs';

const marqueeElement = document.getElementById('marquee')
if( marqueeElement ) {
    import('vanilla-marquee').then(({ default: marquee }) => {
        new marquee( marqueeElement, {
            duplicated: true,
            gap:        12, 
            speed:      50, 
            startVisible: true 
        })
    })
}
if( document.getElementById('login-slider') ) {
    import('@splidejs/splide').then(({ default: Splide }) => {
        const loginSlider = document.getElementById('login-slider')
        let start = 0
        if( loginSlider.dataset.startpage > 0 ) {
          start = loginSlider.dataset.startpage
        }
        const authGallery = new Splide( '#login-slider', {
            perPage   : 1,
            type      : 'fade',
            rewind    : true,
            pagination: false,
            arrows    : false,
            drag      : false,
            start     : start
        }).mount();

        const gotoLinks = document.querySelectorAll('.js-goto-link')
        gotoLinks.forEach(function(gotoLink) {
            gotoLink.addEventListener('click', function(e) {
                e.preventDefault();
                let page = this.dataset.page*1
                authGallery.go(page);
            });
        });
    })
}
if( document.getElementById('portfolio-gallery') ) {
    import('@splidejs/splide').then(({ default: Splide }) => {
        const mainGallery = new Splide( '#portfolio-gallery', {
            type      : 'slide',
            rewind    : true,
            pagination: false,
            arrows    : false,
            autoHeight: true
        })
        const thumbGallery = new Splide( '#portfolio-thumb-gallery', {
            perPage   : 6,
            gap       : 12,
            rewind    : true,
            pagination: false,
            arrows: false,
            isNavigation: true,
            breakpoints: {
                1200: {
                gap: 6
                },
                600: {
                    gap: 2
                }
            }
        })
        mainGallery.sync( thumbGallery );
        mainGallery.mount();
        thumbGallery.mount();
    })
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
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = dt.files;

    if (files.length > 0) {
      let fileElem;
      if( e.target ) {
        if( e.target.classList.contains('drop-area') ) {
          fileElem = e.target.querySelector('.js-file-elem');
        } else {
          fileElem = e.target.closest('.drop-area').querySelector('.js-file-elem');
        }
      }
      if( fileElem ) {
        fileElem.files = files;
      }
    }
    handleDrop(e, this);
  }, false);
})

function handleDrop(e, dropArea) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files, dropArea);
}

function handleFiles(files, dropArea) {
  if( dropArea.closest(".gallery-loader") ) {
    dropArea.closest(".gallery-loader").querySelectorAll(".unsaved").forEach(el => {
      el.remove()
    })
  }
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.className = 'unsaved'
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

const filesElems = document.querySelectorAll('.js-file-elem')
filesElems.forEach( fileElem => {
    fileElem.addEventListener('change', function(e) {
        const files = this.files;

        handleFiles(files, this.parentNode);
    })
})

const ranges = document.querySelectorAll('.js-range')
if( ranges ) {
  var noUiSlider;
    import('nouislider').then(({ default: locNoUiSlider }) => {
        noUiSlider = locNoUiSlider
        ranges.forEach( rangeItem => {
            initRangeItem(rangeItem)
        })
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

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.profileform').forEach( form => {
    form.addEventListener('submit', function(event) {
      if( event.target.classList.contains("loading") ) {
        return;
      }
      event.preventDefault();
      if (!this.checkValidity()) {
        return;
      }

      var formData = new FormData(this);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '', true);

      xhr.onload = function() {
        event.target.classList.remove('loading');
        if (xhr.status === 200) {
          event.target.querySelectorAll('.unsaved').forEach( el => {
            el.classList.remove('unsaved')
          })
          const response = JSON.parse(xhr.responseText);
          if( response.redirectid ) {
            window.history.pushState(null, null, '/profile/?projectid='+response.redirectid);
          }
          if( response.resid ) {
            const buttonWrapper = document.querySelector(".project-desc .button")
            if( buttonWrapper.querySelector("a").length == 0 ) {
              buttonWrapper.append('<a href="/profile/?projectid='+response.resid+'&delete">удалить&nbsp;проект</a>');
            }
          }
        } else {
          console.error('Request failed. Status: ' + xhr.status);
        }
      }
      xhr.onerror = function() {
          console.error('Request failed. Network error.');
      }
      formData.append('ajax', 1);
      event.target.classList.add('loading');
      xhr.send(formData);
    })
  })

  document.addEventListener('click', function(event){
      if (event.target.classList.contains('load-more')) {
        event.preventDefault();
        if (event.target.classList.contains('loading')) {
          return;
        }
        event.target.classList.add('loading')
        var targetContainer = document.querySelector('.portfolio'),
            url = event.target.getAttribute('data-url');
 
        if (url !== null) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = xhr.responseText;
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(response, 'text/html');
                    var elements = doc.querySelectorAll('.item'); // Ищем элементы
                    var pagination = doc.querySelector('.load-more'); // Ищем навигацию

                    // Удаляем старую навигацию
                    var oldLoadMore = document.querySelector('.load-more');
                    if (oldLoadMore) {
                        oldLoadMore.parentNode.removeChild(oldLoadMore);
                    }

                    // Добавляем посты в конец контейнера
                    elements.forEach(function(element){
                        targetContainer.appendChild(element);
                    });

                    // Добавляем навигацию следом
                    if (pagination) {
                        targetContainer.appendChild(pagination);
                    }
                }
            };
            xhr.send();
        }
      }
  });
});

const rating = document.getElementById("ratingWrapper")
if( rating && !rating.classList.contains("disabled") ) {
  function handleMouseEnter(e) {
    e.stopPropagation();
    let indx = parseInt(this.dataset.index);
    for (let i = 1; i <= 5; i++) {
      let img = document.querySelector(".setRating img:nth-child(" + i + ")");
      if (i <= indx) {
          img.src = img.dataset.full;
      } else {
          img.src = img.dataset.empty;
      }
    }
  }

  function handleClick() {
    document.getElementById("currentRating").value = parseInt(this.dataset.index);

    var formData = new FormData();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '', true);

    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if( !response.error ) {
          document.querySelector('.setRating .curRating').style.width = ( response.value * 100 / 5 )+'%';
          document.querySelector('.setRating .count').innerHTML = response.count
        }
      } else {
        console.error('Request failed. Status: ' + xhr.status);
      }
    }
    xhr.onerror = function() {
        console.error('Request failed. Network error.');
    }
    formData.append('rating', this.dataset.index);
    formData.append('postid', document.getElementById('postid').value);
    xhr.send(formData);
  }

  function handleMouseLeave(e) {
    e.stopPropagation();
    let indx = parseInt(document.getElementById("currentRating").value);
    
    for (let i = 1; i <= 5; i++) {
      let img = document.querySelector(".stars img:nth-child(" + i + ")");
      if (i <= indx) {
          img.src = img.dataset.full;
      } else {
          img.src = img.dataset.empty;
      }
    }
  }

  document.querySelectorAll(".stars img").forEach(function(img) {
    img.addEventListener("mouseenter", handleMouseEnter);
    img.addEventListener("click", handleClick);
  })

  document.querySelector(".stars").addEventListener("mouseleave", handleMouseLeave);

  let indx = parseInt(document.getElementById("currentRating").value);
  for (let i = 1; i <= 5; i++) {
    let img = document.querySelector(".stars img:nth-child(" + i + ")");
    if (i <= indx) {
        img.src = img.dataset.full;
    } else {
        img.src = img.dataset.empty;
    }
  }
}