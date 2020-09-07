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
    "h1": `DOM Is Awesome`,
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

//Title change
const title = document.querySelector('title')
title.textContent = "Great Idea!"

// Navigation Menu Links
const navLinks = document.querySelectorAll("a")

navLinks[0].textContent = siteContent["nav"]["nav-item-1"]
navLinks[1].textContent = siteContent["nav"]["nav-item-2"]
navLinks[2].textContent = siteContent["nav"]["nav-item-3"]
navLinks[3].textContent = siteContent["nav"]["nav-item-4"]
navLinks[4].textContent = siteContent["nav"]["nav-item-5"]
navLinks[5].textContent = siteContent["nav"]["nav-item-6"]
navLinks.forEach(link => link.style.color = "green")

const menu = document.querySelector('nav');

let lastMenuItem = document.createElement('a');
lastMenuItem.textContent = 'Learn More';
lastMenuItem.href = "#"
lastMenuItem.style.color = "green"
menu.appendChild(lastMenuItem);
let firstMenuItem = document.createElement('a');
firstMenuItem.textContent = 'Home';
firstMenuItem.href = "#"
firstMenuItem.style.color = "green"
menu.prepend(firstMenuItem);

//cta 

const codeSnippetImage = document.getElementById("cta-img")
codeSnippetImage.src = siteContent["cta"]["img-src"]

const mainHeader = document.querySelector('h1')
mainHeader.textContent = siteContent["cta"]["h1"]
const mainContainer = document.querySelector(".cta-text")


const button = document.querySelector('button')
button.textContent = siteContent["cta"]["button"]


//Features 
const featuresHeader = document.querySelector(".text-content h4")
featuresHeader.textContent = siteContent["main-content"]["features-h4"]

const featuresPara = document.querySelector(".text-content p")
featuresPara.textContent = siteContent["main-content"]["features-content"]

//About
const heading = document.querySelectorAll(".text-content h4")
heading[1].textContent = siteContent["main-content"]["about-h4"]

const paragraph = document.querySelectorAll(".text-content p")
paragraph[1].textContent = siteContent["main-content"]["about-content"]

//middle image
const middleImage = document.getElementById("middle-img")
middleImage.src = siteContent["main-content"]["middle-img-src"]

//Services
heading[2].textContent = siteContent["main-content"]["services-h4"]
paragraph[2].textContent = siteContent["main-content"]["services-content"]

//Product 
heading[3].textContent = siteContent["main-content"]["product-h4"]
paragraph[3].textContent = siteContent["main-content"]["product-content"]

//Vision
heading[4].textContent = siteContent["main-content"]["vision-h4"]
paragraph[4].textContent = siteContent["main-content"]["vision-content"]

//Contact
const contact = document.querySelector(".contact h4")
contact.textContent = siteContent["contact"]["contact-h4"]

const contactP = document.querySelectorAll(".contact p")
contactP[0].textContent = siteContent["contact"]["address"]
contactP[1].textContent = siteContent["contact"]["phone"]
contactP[2].textContent = siteContent["contact"]["email"]

//Footer
const footer = document.querySelector("footer p")
footer.textContent = siteContent["footer"]["copyright"]