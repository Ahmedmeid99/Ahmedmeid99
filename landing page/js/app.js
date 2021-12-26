/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
/*navbar Variables */
const navbar=document.querySelector(".navbar__menu")
const myUl=document.getElementById("navbar__list");
/*sections Variables*/
const sections=document.querySelectorAll("section");
//console.log(section.length);





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

/*
Create links dynamically, 
after increasing the number of sections,
the number of links increases with it
*/

for(let i=1;i<=sections.length;i++){
    //create li
    const myLi=document.createElement("li");
    //add attribute =>class in li
    myLi.setAttribute("class","click");
    //create a
    const myLink=document.createElement("a");
    //add attribute =>class in a (to add style)
    myLink.setAttribute("class","menu__link");
    myLink.setAttribute("href","#section"+`${i}`);
    //add text in a
    myLink.appendChild(document.createTextNode("section"+" "+i));
    //append a in li
    myLi.appendChild(myLink);
    //append li in ul
    myUl.appendChild(myLi);
};
//To access all li in loop
const liElement=document.querySelectorAll("li");
//To access all a in loop
const myLinkActive=document.querySelectorAll("a");

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
 window.addEventListener("scroll",function(){
     sections.forEach(function(section){
         if(section.getBoundingClientRect().top < window.innerHeight*.9){
             //remove active class from sections 
             sections.forEach(function(section){
                 section.classList.remove("your-active-class");})
             
             //add class active to section
             section.classList.add("your-active-class");
             //remove active from links
                 myLinkActive.forEach(function(a){
            a.classList.remove("active")
        })
             //add class active to link
             let liActive=document.querySelector(`[href="#${section.id}"]`);
             liActive.classList.add("active")
             
             }
     })
     })

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// create function to show menu by icon1
const iconOpen=document.querySelector(".icon-open");
iconOpen.onclick=function(){
    iconOpen.style.display="none";
    navbar.style.display="block";
    
}
// create function to remove menu by icon-x
const iconClose=document.querySelector(".icon-close");
iconClose.onclick=function(){
    iconClose.parentElement.style.display="none";
    iconOpen.style.display="block";
}
// Scroll to section on link click
/*create scrooling by js*/
liElement.forEach(function(event){ 
    for(let i=0; i<=liElement.length-1; i++)
    liElement[i].addEventListener("click",function(event){
        //remove Default Event
        event.preventDefault();   
//smooth moveing
        let ele=document.getElementById(event.target.getAttribute("href").substring(1));
        ele.scrollIntoView({block:"center",behavior:"smooth"});
    })
})
// Set sections as active
//show icon by event => scroll
const toTop=document.querySelector(".to-top");
window.addEventListener("scroll",function(){
    if(window.scrollY >=400){
       toTop.style.right="10px";
       }else{toTop.style.right="-30px";}
})
//go to Top by event => click
toTop.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})
