'use strict'

document.querySelector("#addBtn").addEventListener('click', function () {
    let elem = document.createElement('div');
        elem.classList.add('carDivElement');
    
    let elem2 = document.createElement('div');
        elem2.classList.add('nameDivElement');
        elem2.innerHTML = carName.value;
    
    let elem3 = document.createElement('div');
        elem3.classList.add('imgDivElement');
        elem3.style.backgroundImage = ("URL(' " + carImg.value + "')");
    
    let elem4 = document.createElement('p');
        //elem4.classList.add('carDiscussElement');
        elem4.innerHTML = carDiscuss.value;
    
    let elem5 = document.createElement('cite');
        elem5.innerHTML = "Автор : " + nick.value;
    
    elem.appendChild(elem2);
    elem.appendChild(elem4);
    elem.appendChild(elem3);
    elem.appendChild(elem5);
    
    mn2.appendChild(elem);
})

document.addEventListener('scroll', function () {
    let btn = document.querySelector('#upBtn')
    let rect = document.body.getBoundingClientRect();
    if (window.scrollY > 0) {
        btn.style.opacity++
    }

    if (window.scrollY < 0) {
        btn.style.opacity--
    }

    if (window.scrollY == 0) {
        btn.style.opacity = 0;
    }

    document.querySelector('#scroll2').style.width = (window.scrollY + "%");
    test.innerHTML = (main.style.height + "px");


})
document.querySelector('#upBtn').addEventListener('click', function () {
    requestAnimationFrame(scrollToTop)
    //window.scrollTo(0, 0);
})

function scrollToTop() {
    window.scrollBy(0, -110);
    if (window.scrollY > 100) {
        requestAnimationFrame(scrollToTop);
    }
}