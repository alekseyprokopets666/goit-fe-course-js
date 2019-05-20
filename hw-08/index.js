
const galleryItems = [
    { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "alt text 6" },
];



const imageGallery = document.querySelector('.image-gallery'),
    fullview = document.querySelector('.fullview'),
    preview = document.querySelector('.preview');

fullview.innerHTML = ` <img src="${galleryItems[0].fullview}">`

const inPreview = galleryItems.reduce((acc, el) => acc + `<li><img src="${el.preview}" data-fullview="${el.fullview}" alt="${el.alt}"></li>`, '');

preview.innerHTML = inPreview;

function result(event) {
    console.log(event.target.dataset.fullview)
    if (event.target.nodeName === 'IMG') {

        fullview.innerHTML = ` <img src="${event.target.dataset.fullview}">`
    }
}

preview.addEventListener('click', result);