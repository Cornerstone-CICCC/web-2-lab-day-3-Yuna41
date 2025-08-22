gsap.registerPlugin(ScrollTrigger);

const heroTl = gsap.timeline()
heroTl.from('.section1 h1 span:last-child', {x: '100vw', duration: 1.2})
      .from('.section1 h1 span:first-child', {x: '-50vw', duration: .6, delay: .6}, '<')
      .from('.section1 p', {opacity: 0, transformOrigin: 'left top', rotate: '45deg', duration: .4})
      .from('.section1 img', {y: '100vh', duration: .6})

const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section2',
    // markers: true,
    start: 'top 20%',
    end: 'top 10%',
    toggleActions: 'play none reverse none'
  }
})
aboutTl.from('.section2 h2 span', {y: '-100vh', stagger: .2})
       .from('.section2 p', {rotateY: 90, duration: .8})

const skillTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section3',
    // markers: true,
    start: 'top 14%',
    end: 'top top',
    toggleActions: 'play none reverse none'
  }
})
skillTl.from('.section3 h2', {x: '0', scale: 6, duration: .6})
       .from('.section3 p span', {y: '50vh', background: 'transparent', color: 'white', stagger: .2, delay: .1})
       .to('.section3 p span', {y: '0', background: 'white', color: 'black', stagger: .2}, '<')

const horizontalTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.horizontal-sections',
    // markers: true,
    start: 'top top',
    scrub: true,
    pin: true,
    end: 'bottom 40%'
  }
})
horizontalTl.to('.horizontal-sections', {xPercent: -50, duration: 10})

const projectTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.horizontal-sections',
    // markers: true,
    start: 'center 50%',
    end: 'bottom top',
    toggleActions: 'play none reverse none'
  }
})
projectTl.from('.section4 .portfolio-item', {x: '100vw', duration: 2, stagger: .2})
         .to('.section5', {backgroundPosition: '150% 90%'})

const contactTtl = document.querySelector('.section5 h2')
const contactTtlLetters = document.querySelector('.section5 h2').textContent.split('')
contactTtl.innerHTML = ''
contactTtlLetters.forEach(el => {
  const span = document.createElement('span')
  span.style.minWidth = '1rem'
  span.innerHTML = el
  contactTtl.appendChild(span)
})
const contactTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section5',
    // markers: true,
    start: 'top top',
    scrub: true,
    pin: true,
    end: 'bottom 30%'
  }
})
contactTl.from('.section5 h2 span', {y: '-50vh', stagger: .1})
         .fromTo('.section5 p', {y: '100%', opacity: 0}, {y: '0', opacity: 1})
         .fromTo('.section5 button', {scale: 0}, {scale: 1})
         .to('.section5', {backgroundColor: 'black'})
         .to('.section5', {backgroundPosition: '90% 90%'})