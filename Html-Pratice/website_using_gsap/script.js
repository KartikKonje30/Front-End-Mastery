function videoanimation(){
    var videocon = document.getElementById("video-container");
    var playbtn = document.getElementById("play");
    
    videocon.addEventListener("mouseenter",function(){
        gsap.to(playbtn,{
            opacity: 1,
            scale: 1
        })
    })
    
    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            opacity: 0,
            scale: 0
        })
    })
    
    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
            left: dets.x-50,
            top: dets.y-50
        })
    })
}
videoanimation();

function loadinganimation(){
    gsap.from("#page1 h1",{
        y: 100,
        opacity: 0,
        delay: 0.2,
        duration: 0.3,
        stagger: 0.3
    })
    gsap.from("#page1 #video-container",{
        scale: 0.9,
        opacity: 0,
        delay: 1.2,
        duration: 0.4,
    })
}
loadinganimation();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left: dets.x,
        top: dets.y
    })
})

function highlighter(){

document.querySelector("#child1").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(1)",
            backgroundColor: "#f6dfc0",
        });
    });

document.querySelector("#child1").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(0)",
        });
    });

document.querySelector("#child2").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(1)",
            backgroundColor: "#dff1c6",
        });
    });

document.querySelector("#child2").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(0)",
        });
    });

document.querySelector("#child3").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(1)",
            backgroundColor: "#E1AFD1",
        });
    });

document.querySelector("#child3").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(0)",
        });
    });

    document.querySelector("#child4").addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(1)",
            backgroundColor: "#B7C9F2",
        });
    });

document.querySelector("#child4").addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%) scale(0)",
        });
    });

}

highlighter();


