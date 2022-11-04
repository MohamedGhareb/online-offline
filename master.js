let title = document.querySelector(".title")
let ul = document.querySelector("ul")
let reload = document.querySelector(".reload")
reload.onclick = function(){
    window.location.reload()
}

window.onload = function(){
    if(window.navigator.onLine){
        online()
    }else{
        offline()
    }
}

function online(){
    title.innerHTML = 'al net geh alf mbrook ya f2er'
    title.style.color = "green"
    ul.classList.add("hide")
    reload.classList.add("hide")
}
function offline(){
    ul.classList.remove("hide")
    reload.classList.remove("hide")
    title.innerHTML = 'aft7 al net ya ro7 omk'
}


