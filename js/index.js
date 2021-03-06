const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.getElementsByTagName('a');

nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

let links = document.querySelectorAll('a');
links.forEach(link => {
  link.style.color = 'green'
});

const gitLink = document.createElement('a');
gitLink.textContent = "GITHUB";

gitLink.style.color = 'red';
gitLink.style.fontSize = '2rem';


gitLink.setAttribute('href', 'https://github.com/danielkyman/DOM-I');

const navAddTwo = document.createElement('a');
navAddTwo.textContent = "TEST_P"

const parentElement = document.querySelector('nav');
parentElement.appendChild(gitLink);

const newParentElement = document.querySelector('nav');
newParentElement.prepend(navAddTwo);

// const newNewParentElement = document.querySelector('a');
// newNewParentElement.append(navAdd);


let hOne = document.querySelector('h1');
hOne.textContent = siteContent["cta"]["h1"];


let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let hFour = document.getElementsByTagName('h4');
hFour[0].textContent = siteContent["main-content"]["features-h4"];
hFour[1].textContent = siteContent["main-content"]["about-h4"];
hFour[2].textContent = siteContent["main-content"]["services-h4"];
hFour[3].textContent = siteContent["main-content"]["product-h4"];
hFour[4].textContent = siteContent["main-content"]["vision-h4"];
hFour[5].textContent = siteContent["contact"]["contact-h4"];

let p = document.getElementsByTagName('p');
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];
p[5].textContent = siteContent["contact"]["address"];
p[6].textContent = siteContent["contact"]["phone"];
p[7].textContent = siteContent["contact"]["email"];
p[8].textContent = siteContent["footer"]["copyright"];

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//stretch styling

// p[0].style.backgroundColor = 'red';
// p[1].style.backgroundColor = 'blue';
// p[2].style.backgroundColor = 'green';

