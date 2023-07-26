var btn_left = document.getElementById('btn_left')
var btn_right = document.getElementById('btn_right')

var largura = window.screen.width;
if (largura>990) {
    var caixas = document.getElementsByClassName('caixa')
    caixas[0].classList.remove('caixa-oculta')
    caixas[1].classList.remove('caixa-oculta')
    caixas[2].classList.remove('caixa-oculta')
    largura = 3
}
else if(largura>575) {
        var caixas = document.getElementsByClassName('caixa')
        caixas[0].classList.remove('caixa-oculta')
        caixas[1].classList.remove('caixa-oculta')
        largura = 2
}    else {
        var caixas = document.getElementsByClassName('caixa')
        caixas[0].classList.remove('caixa-oculta')
        largura = 1
}

function clickright() {
            var caixas = document.getElementsByClassName('caixa')
            var k;
            var lista_id_caixa_ativa = [] // armazena o id das caixas ativas

            //armazenado o id das caixas visiveis
            for (k=0; k<9 ;k++) {
                //alert(caixas[k]+ k)
                if (!caixas[k].classList.contains('caixa-oculta')) {
                    lista_id_caixa_ativa.push(k)
                }
            }

            //deixando as caixas ocultas
            for (k=0; k<largura; k++){
                caixas[ lista_id_caixa_ativa[k] ].classList.add('caixa-oculta')
            }
            
            //deixando as novas caixas visiveis
            for (k=0; k<largura ;k++) {
                if (lista_id_caixa_ativa[k] < 8) {
                    caixas[ lista_id_caixa_ativa[k] +1 ].classList.remove('caixa-oculta')
                }
                else {
                    caixas[ 0 ].classList.remove('caixa-oculta')
                }
            }
            
        }
        
function clickleft() {
            var caixas = document.getElementsByClassName('caixa')
            var k;
            var lista_id_caixa_ativa = [] // armazena o id das caixas ativas

            //armazenado o id das caixas visiveis
            for (k=0; k<9 ;k++) {
                //alert(caixas[k]+ k)
                if (!caixas[k].classList.contains('caixa-oculta')) {
                    lista_id_caixa_ativa.push(k)
                }
            }

            //deixando as caixas ocultas
            for (k=0; k<largura; k++){
                caixas[ lista_id_caixa_ativa[k] ].classList.add('caixa-oculta')
            }

            //deixando as novas caixas visiveis
            for (k=0; k<largura ;k++) {
                if (lista_id_caixa_ativa[k] > 0) {
                    caixas[ lista_id_caixa_ativa[k] -1 ].classList.remove('caixa-oculta')
                }
                else {
                    caixas[ 8 ].classList.remove('caixa-oculta')
                }
            }
            
        }


btn_left.addEventListener("click", clickleft)
btn_right.addEventListener("click", clickright)

