var typed =new Typed(".text",{
    strings:["Frontend Developer",  "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// toggle navigation
// let menuIcon=document.querySelector('#menu-icon');
// let navbar=document.querySelector('.navbar');

// menuIcon.onclick=() =>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// toggle navigation
function toggleMenu(){
    var navbar=document.querySelector(".navbar a");
    if(navbar.style.display === "block"){
        navbar.style.display="none";
    }
    else{
        navbar.style.display="block";
    }
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top<offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    // Sticky navbar
    let header=document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY>100);

 //remove toggle icon adn navbar after the click
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//scroll and reveal
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// about section Read more
// let readMoreBtn=document.querySelector('#read-more-btn');
// readMoreBtn.addEventListener('click', ()=>{
//     let contextDot = document.getElementsByClassName('context-dot')[0];
//     let contextPara = document.getElementById('context-para');
//     contextDot.classList.toggle('hideIt');
//     if(contextDot.classList.contains('hideIt')){
//         readMoreBtn.innerHTML='Read Less';
//         contextPara.innerHTML += `<br>During my preparation for NEET, I gained valuable experience and insights that have proven to be incredibly helpful in my current field of software engineering. I learned to approach problems in a systematic and analytical way, and I discovered how to learn things quickly and efficiently. These skills have been invaluable in my work as a programmer, where I'm constantly encountering new challenges and technologies.
//         <br>
//         Although I was unable to secure admission into a medical college, I didn't let that setback discourage me. Instead, I took the opportunity to explore other fields and discovered a love for programming. I began teaching myself programming languages like Java, C, and C++, and I quickly realized that I had a talent for software engineering.
//         <br>
//         Since then, I've been actively working on projects to develop my skills in software engineering. I'm constantly learning new techniques and exploring different areas of the field, and I'm excited to see where my journey takes me. At the same time, I've continued to pursue my passion for music, playing the tabla and experimenting with new ways to create and produce music. Also am a National Scholarship holder in Tabla.
//         <br>
//         Overall, I'm someone who's passionate about exploring new areas of knowledge and pushing myself to achieve my goals. Whether it's through music or coding, I'm always looking for ways to challenge myself and grow as a person. The experience and skills I gained during my NEET preparation have proven to be invaluable in my current pursuits, and I'm excited to see where my journey takes me next.`;
//     }else{
//         readMoreBtn.innerHTML='Read More';
//         contextPara.innerHTML = `Hi, I'm Pratik Kumar Sahoo, a passionate tabla player and music enthusiast who's discovered a new passion for coding and software engineering. After finishing my 12th exams, I initially wanted to pursued admission into a medical college so started preparing for NEET. However, I ultimately didn't break and started a new journey of coding.<span class="context-dot">....</span>`;
//     } 
// }
// );
