function locomotiveanimation()
{
    
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

 
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}



document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
        x: dets.x,
        y: dets.y,
    })
})


function navAnimation() {
    var nav = document.querySelector('nav');
    var tl = gsap.timeline();
    nav.addEventListener("mouseenter", () => {
        tl.to("#nav-btm", {
            height: "210%",
            bottom: "-210%",
            backgroundColor: "#111",
            duration: .1
        })
        tl.to("#nav-btm h5 ", {
            display: "block",
            duration: .1,
            delay: .8,
            stagger: {
                amount: .6
            },

        })


    })

    var tl = gsap.timeline();
    nav.addEventListener("mouseleave", () => {
        tl.to("#nav-btm h5 ", {
            display: "none",
            duration: .1,
            stagger: {
                amount: .6
            },


        })
        tl.to("#nav-btm", {
            height: "10%",
            bottom: "-10%",
            duration: .1,
            // delay:.2,

            backgroundColor: "transparent"
        })



    })

}

function cursorpage9Animation() {
    var rightelms = document.querySelectorAll(".right-elem");



    rightelms.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })

        })
        elem.addEventListener("mousemove", (dets) => {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 60,
                y: dets.y - elem.getBoundingClientRect().y - 100,
            })

        })
    })
}
function svgEffect() {
    var path = `M 10 100 Q 550 100 990 100 `;

    var finalPath = `M 10 100 Q 550 100 990 100`;

    var line = document.querySelector('.line');

    line.addEventListener('mousemove', (dets) => {
        path = `M 10 100 Q ${dets.x} ${dets.y} 990 100 `

        gsap.to("svg path", {
            attr: { d: path },
            duration: .2,
            ease: "power3.out"

        })
    })
    line.addEventListener('mouseleave', (dets) => {
        gsap.to("svg path", {
            attr: { d: finalPath },
            duration: .5,
            ease: "elastic.out(1,0.2"




        })
    })
}
function page2videoanimation() {

    var page2center = document.querySelector(".page2-center");
    var page2video = document.querySelector("#page-2 video");

    page2center.addEventListener("click", () => {
        page2video.play();  // Use the correct variable for the video
        gsap.to(page2video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
        });
    });

    page2video.addEventListener('click', () => {
        page2video.pause();
        gsap.to(page2video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
        })
    })
}
function divesrottateanimaiton(){
    gsap.to("#btm14-part2 h4",{
        x:0,
        duration:2,
        scrollTrigger:{
            trigger:"#btm14-part2",
            scroller:"#main",
            start:"40% 80%",
            end:"80% 70%",
            scrub:true
        }
    })
    gsap.to("#btm14-part3 h4",{
        x:0,
        duration:2,
        scrollTrigger:{
            trigger:"#btm14-part3",
            scroller:"#main",
            start:"40% 80%",
            end:"80% 70%",
            scrub:true
        }
    })
    gsap.to("#btm14-part4 h4",{
        x:0,
        duration:2,
        scrollTrigger:{
            trigger:"#btm14-part4",
            scroller:"#main",
            start:"40% 80%",
            end:"80% 70%",
            scrub:true
        }
    })
    
}
function divesimageanimation()
{
    var sections = document.querySelectorAll('.sec-right')
var sectioncursor = document.querySelector(".sec-right .sec-cursor");


sections.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        elem.childNodes[5].style.opacity = 1;
        elem.childNodes[1].style.opacity = 1;
        elem.childNodes[5].play();
    })
    elem.addEventListener("mouseleave", () => {
        elem.childNodes[5].style.opacity = 0;
        elem.childNodes[1].style.opacity = 0;
        elem.childNodes[5].pause();
    })
    elem.addEventListener("mousemove", (dets) => {
        gsap.to(elem.childNodes[1], {
            x: dets.x - elem.getBoundingClientRect().x - 60,
            y: dets.y - elem.getBoundingClientRect().y - 50,
        })


    })


})
}

var tl = gsap.timeline();
tl.from("#page-1",{
    opacity:0,
    duration:.2,
    delay:.2  

})
tl.from("#page-1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius:"100px",
    duration:2,
    ease:"expo.out"

})
tl.from("nav",{
    // opacity:0,
   duration:0.5,
   stagger:0.2
})


tl.from("#page-1 h4, #page-1 h1,#page-1 p ,#page-1 #moving-div",{
    opacity:0,
    duration:0.5,
    stagger:0.2
})


locomotiveanimation();

divesimageanimation()
divesrottateanimaiton()
navAnimation();

cursorpage9Animation()

svgEffect();

page2videoanimation();


