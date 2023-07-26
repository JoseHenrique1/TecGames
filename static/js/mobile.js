var hamburger = document.getElementsByClassName('hamburger')[0]


function sidebar () {

    var nav = document.getElementsByTagName("nav")[0]
    var ul = document.getElementsByTagName("ul")[0]
    var li = document.getElementsByClassName('li')

    

    if (!ul.classList.contains('ul-sidebar')) {
        ul.classList.add('ul-sidebar')

    } else {
        ul.classList.remove('ul-sidebar')
    }
    

}



hamburger.addEventListener('click', sidebar)