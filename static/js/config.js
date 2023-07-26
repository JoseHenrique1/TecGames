

var config = document.getElementsByClassName("config")[0]
//
function configAtivado ( ) {
    var boxMain = document.getElementsByClassName('box-config-main')[0]
    var boxContent = document.getElementsByClassName("box-content")[0]
    if (config.classList.contains("config-ativado")) {
        config.classList.remove('config-ativado')
        boxMain.classList.remove('box-config-main-ativado')
        boxContent.classList.remove('box-content-ativado')   
    }//if
    else {
        config.classList.add('config-ativado')
        boxMain.classList.add('box-config-main-ativado')
        boxContent.classList.add('box-content-ativado')
        
    }   
}

var configP = document.getElementsByClassName("config-p")[0]
configP.addEventListener('click', configAtivado)