let slidesImages = Array.from(document.querySelectorAll(".slideContainer img"));

let slidesCount = slidesImages.length;

let currentSlide = 1 ;

//create ul
let ul = document.createElement('ul');

//set Attr
ul.setAttribute('id', 'pagination-ul');

for(var i = 0 ; i < slidesCount; i++){

    let li = document.createElement('li');

    li.setAttribute('data-index', i + 1);

//add li inside ul
ul.appendChild(li)
}
//add ul in pagination-parent
document.querySelector('.pagination-parent').appendChild(ul);

let paginationcreatedUl = document.getElementById('pagination-ul')

let bulletpag = Array.from(document.querySelectorAll('#pagination-ul li'));

for(var i = 0 ; i < bulletpag.length; i++){
    bulletpag[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}
checker();


function checker(){
    //removeActive CLass
    removeActiveClass();
    //set active class on img
    slidesImages[currentSlide - 1].classList.add('active');

    //set transition
    slidesImages[currentSlide - 1].classList.add('slide-image-beg');

    //set active class on pagin li
    paginationcreatedUl.children[currentSlide - 1].classList.add('active')
}

function removeActiveClass(){
    slidesImages.forEach(function(img){
        img.classList.remove('slide-image-beg');
    })

    slidesImages.forEach(function(img){
        img.classList.remove('active');
    })

    bulletpag.forEach(function(bullet){
        bullet.classList.remove('active');
    })
}