var fotos = document.getElementsByClassName('box-explorar-sub')
var modal = document.getElementsByClassName('modal')[0]

var modal_conteudo = document.getElementsByClassName('modal-conteudo')[0]
// ativa ou desativa o modal

var cond = false


var k = 0

for(k=0;k<12;k++) {
    fotos[k].addEventListener('click', foto_click)
}

function foto_click(){
    if (modal.classList.contains('m-desativado')){
        modal.classList.remove('m-desativado')
    }
    
}

function video () {
    cond = true
}

function telaTransparente_click () {
    if(!cond && !modal.classList.contains('m-desativado')) {
        modal.classList.add('m-desativado')

    }
    cond = false
}

//foto.addEventListener('click', foto_click)

modal_conteudo.addEventListener('click', video)

modal.addEventListener('click', telaTransparente_click)




