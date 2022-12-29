let t = document.querySelector(".title")
let u = document.querySelector("ul")
let r = document.querySelector(".re")
let b = document.querySelector("body")
window.onload=function(){
    if(window.navigator.onLine){
        online()
    }else{
        offline()
    }
}
window.addEventListener("online",function(){
    online()
})
window.addEventListener("offline",function(){
    offline()
})
r.onclick=function(){
    window.location.reload()
}
 function online(){
    t.innerHTML="online now"
    t.style.color="green"
    b.style.background="white"
    u.classList.add("hide")
    r.classList.add("hide")
 }
 function offline(){
    t.innerHTML="offline now"
    t.style.color="#666"
    b.style.background="rgb(255, 40, 40)"
    u.classList.remove("hide")
    r.classList.remove("hide")
 }