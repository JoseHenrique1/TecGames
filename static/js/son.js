var taghtml = document.getElementsByTagName("body")[0]
var navson = document.getElementsByClassName("son")[0]




function setcond () {
    
    if (navson.textContent == "Son") {
        navson.innerText = "Off"
        navson.classList.remove('bi-volume-down-fill')
        navson.classList.add('bi-volume-mute-fill')
        
    } else {
        navson.innerText = "Son"
        navson.classList.remove('bi-volume-mute-fill')
        navson.classList.add('bi-volume-down-fill')   
    }
}

function son () {
    if (navson.textContent == "Son") {
        var audio = document.getElementsByTagName("audio")[0]
        audio.play() 
    } 
      
}

taghtml.addEventListener('click', son)
navson.addEventListener('click', setcond)
