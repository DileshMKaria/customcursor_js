let a = document.querySelector(".main")
let b = document.querySelector(".cursor",)

a.addEventListener("mousemove",function(dmk){
    b.style.left = dmk.x+"px"
    b.style.top = dmk.y+"px"
})