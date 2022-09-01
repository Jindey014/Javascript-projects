//Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
//pageYOffset is a read-only window property that returns the number of pixels the document has been scrolled vertically.

//set date dynamically

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();


//close links

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    // linksContainer.classList.toggle("show-links");//yo manually add gareko ho which is not good so we dynamically add it 
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    }
    else {
        linksContainer.style.height = 0;
    }
})


//fixed navbar

const navbar = document.querySelector(".nav");
const topLink = document.querySelector(".top-link");

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight >= navbarHeight) {
        navbar.classList.add("fixed-nav")
    }
    else {
        navbar.classList.remove("fixed-nav")
    }
})


//top link


window.addEventListener('scroll', function () {
    const topHeight = window.pageYOffset;
    if (topHeight > 500) {
        topLink.classList.add("show-top")
    }
    else {
        topLink.classList.remove("show-top")
    }
})


//smooth scroll
const scrollLinks = document.querySelectorAll(".scroll-link")
scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        //prevent default as by default scroll huda sectionko ali portion skip bhairako thyo
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);//slice garnu ko reason chai # sign lai hatauna lagi ho
        const element = document.getElementById(id);
        // calculate the height
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;//subtract chai scroll garda navbar le space khanxa so teslai remove garna
        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0;

    })
})






