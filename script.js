function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var idade = ano - fano.value
    var fsex = window.document.getElementsByName('radsex')
    var res = window.document.getElementById('res')
    var gênero = ''
    var etária = ''
    var img = window.document.getElementById('imagem')

    if(fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] tente novamente')
        
       
    } else if (fsex[0].checked) {
        gênero = 'um Homem'
        if (idade >= 0 && idade < 5 ) {
            etária = 'Bebê'
            img.src = 'bebehomem.png'
            //gonhan bebe
        } else if (idade < 13) {
            etária = 'Criança'
            img.src = 'kidhomem.png'
            //gonhan criança
        } else if (idade < 16) {
            etária = 'Adolecente'
            img.src = 'jovemhomem.png'
            //gonha teen
        } else if (idade < 19) {
            etária = 'Adolecente'
            img.src = 'jadultohomem.png'
            //gonhan joven 
        } else if (idade < 40) {
            etária = 'Adulto'
            img.src = 'adultohomem.png'
            //gonhan adulto
        } else if (idade < 60){
            etária = 'Adulto'
            img.src = 'bestialhomem.png'
            //gonhan bestial
        } else { 
            etária = 'Idoso'
            img.src = 'idosohomem.png'
            //vovo gohan

        }
        res.innerHTML = `Detectamos ${gênero} ${etária} com ${idade} anos`
        res.style.textAlign = 'center'

        

    } else if (fsex[1].checked) {
        gênero = ' uma Mulher'
        if (idade >= 0 && idade < 5) {
            etária = 'Bebê'
            img.src = 'bebemulher.png'
            //Pan bebe
        }else if (idade < 13){
            etária = 'Criança'
            img.src = 'mulherkid.png'
            //Personagem fem kid
        }else if (idade < 19) {
            etária = 'Adolecente'
            img.src = 'mulheradolecente.png'
            //prsng fem adolecent
        }else if (idade < 40) {
            etária = 'Adulta'
            img.src = 'mulheradulta.png'
            // || || adulta 
        }else if (idade < 60) {
            etária = 'Adulta'
            img.src = 'mulheradultaveia.png'
            //Bulma do gt
        } else {
            etária = 'Idosa'
            img.src = 'mulherveia.png'
            //vovo Uranai
        }
        res.innerHTML = `Detectamos ${gênero} ${etária} com ${idade} anos`
        res.style.textAlign = 'center'
    }  


  
   

}