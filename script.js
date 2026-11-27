const photos = [
   {
      src: "assets/img-1.jpeg",
      alt: "First photo"
   },
   {
      src: "assets/img-2.jpeg",
      alt: "Second photo"
   },
   {
      src: "assets/img-5.jpeg",
      alt: "Third photo"
   },
   {
      src: "assets/img-6.jpeg",
      alt: "Fourth photo"
   },
   {
      src: "assets/img-7.jpeg",
      alt: "Fifth photo"
   },
];

let currentPhoto = 0;

const galleryPhoto = document.getElementById("gallery-photo");
const previousButton = document.getElementById("previous-photo");
const nextButton = document.getElementById("next-photo");

function showPhoto(index) {
   currentPhoto = (index + photos.length) % photos.length;

   galleryPhoto.src = photos[currentPhoto].src;
   galleryPhoto.alt = photos[currentPhoto].alt;
}

previousButton.addEventListener("click", () => {
   showPhoto(currentPhoto - 1);
});

nextButton.addEventListener("click", () => {
   showPhoto(currentPhoto + 1);
});