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