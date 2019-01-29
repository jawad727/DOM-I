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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let navs = document.querySelectorAll('header nav a');

navs[0].innerText = siteContent['nav']['nav-item-1'];
navs[1].innerText = siteContent['nav']['nav-item-2'];
navs[2].innerText = siteContent['nav']['nav-item-3'];
navs[3].innerText = siteContent['nav']['nav-item-4'];
navs[4].innerText = siteContent['nav']['nav-item-5'];
navs[5].innerText = siteContent['nav']['nav-item-6'];

//nav.appendChild();

navs.forEach(function(item){
  item.style.color = 'red';
})

let navmain = document.querySelector('nav')
let newnav = document.createElement('a');
newnav.innerText = 'Last';
newnav.href = "#";
navmain.appendChild(newnav);

let newnav2 = document.createElement('a');
newnav2.innerText = 'First';
newnav2.href = "#";
navmain.prepend(newnav2);

newnav.style.color = 'red';
newnav2.style.color = 'red';


let subtitles = document.querySelectorAll('div h4');

subtitles[0].innerText = siteContent["main-content"]["features-h4"];
subtitles[1].innerText = siteContent["main-content"]["about-h4"];
subtitles[2].innerText = siteContent["main-content"]["services-h4"];
subtitles[3].innerText = siteContent["main-content"]["product-h4"];
subtitles[4].innerText = siteContent["main-content"]["vision-h4"];
subtitles[5].innerText = siteContent["contact"]["contact-h4"];

let h1 = document.querySelector('section div h1');

h1.innerText = siteContent["cta"]["h1"];

let button = document.querySelector('button');

button.innerText = siteContent["cta"]["button"];

let ptags = document.querySelectorAll('p');

ptags[0].innerText = siteContent["main-content"]["features-content"];
ptags[1].innerText = siteContent["main-content"]["about-content"];
ptags[2].innerText = siteContent["main-content"]["services-content"];
ptags[3].innerText = siteContent["main-content"]["product-content"];
ptags[4].innerText = siteContent["main-content"]["vision-content"];
ptags[5].innerText = siteContent["contact"]["address"];
ptags[6].innerText = siteContent["contact"]["phone"];
ptags[7].innerText = siteContent["contact"]["email"];
ptags[8].innerText = siteContent["footer"]["copyright"];

let CTA = document.getElementById("cta-img");

CTA.setAttribute('src', siteContent["cta"]["img-src"])

let MidIMG = document.getElementById("middle-img");

MidIMG.setAttribute('src', siteContent["main-content"]["middle-img-src"])





