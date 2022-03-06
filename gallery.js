const pictureInnerContainer = document.querySelector('.picture-inner-container');

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = ["assets/img/gallery/galery1.jpeg", "assets/img/gallery/galery2.jpeg", "assets/img/gallery/galery3.jpeg", "assets/img/gallery/galery4.jpeg", "assets/img/gallery/galery5.jpeg", "assets/img/gallery/galery6.jpeg", "assets/img/gallery/galery7.jpeg", "assets/img/gallery/galery8.jpeg", "assets/img/gallery/galery9.jpeg", "assets/img/gallery/galery10.jpeg", "assets/img/gallery/galery11.jpeg", "assets/img/gallery/galery12.jpeg", "assets/img/gallery/galery13.jpeg", "assets/img/gallery/galery14.jpeg", "assets/img/gallery/galery15.jpeg"];
shuffle(arr);

for (let i=0; i<arr.length; i++) {
const img = document.createElement('img');
img.classList.add('gallery-pictures')
if (arr[i] === "assets/img/gallery/galery1.jpeg" || arr[i] === "assets/img/gallery/galery2.jpeg" || arr[i] === "assets/img/gallery/galery4.jpeg" || arr[i] === "assets/img/gallery/galery15.jpeg") {
    img.classList.add('small')
}

if (i===0 || i=== 10) {
     img.classList.add('lisa')
}
img.src = `${arr[i]}`;
img.alt = `galery picture`;
pictureInnerContainer.append(img);
}

function animateGalleryImage() {
  const galleryPictures = document.querySelectorAll('.gallery-pictures');

  galleryPictures.forEach(galleryPicture => {

    const imageInAt = window.scrollY + window.innerHeight - (galleryPicture.height / 2);
    const imageBottom = galleryPicture.offsetParent.offsetParent.offsetTop + galleryPicture.offsetTop + galleryPicture.height;
    const galleryBack = imageInAt > (galleryPicture.offsetParent.offsetParent.offsetTop + galleryPicture.offsetTop);
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (galleryBack && isNotScrolledPast) {
      galleryPicture.classList.add("active");
    } else {
      galleryPicture.classList.remove("active");
    } 
    
  });
}
window.addEventListener("scroll", animateGalleryImage);


