let tl = gsap.timeline({
    repeat:-1
})

tl.to(".imageContainer",{
    ease:Expo.easeInOut,
    duration:1.5,
    width:'100%',
    stagger:2
},'a')
.to("#tagLine h3",{
    ease:Expo.easeInOut,
    top:0,
    stagger:2,
    duration:1.5,
},'a')
.to("#tagLine h3",{
    delay:2,
    ease:Expo.easeInOut,
    top:-100,
    stagger:2,
    duration:1.5,
},'a')