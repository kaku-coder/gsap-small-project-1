var tl=gsap.timeline()


tl.from(".nav img,.nav h3,.nav h4,.nav button",{
    y:-100,
    duration:0.5,
    delay:0.5,
    opacity:0.5,
    stagger:1
})
tl.from(".main h1",{
    y:200,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.3
})
tl.from(".main>img",{
    scale:0,
    duration:1,
    opacity:0,
    stagger:0.3
})
tl.from(".main h5",{
    scale:0,
    opacity:0,
})
tl.to(".main h5",{
    y:40,
    duration:1,
    repeat:-1,
    yoyo:true
})