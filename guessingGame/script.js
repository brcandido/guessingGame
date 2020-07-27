let numUsuario = document.getElementById("numeroUsuario")
let selecao = document.getElementsByName("intervalo")
let guess = ''
let msgIntervalo = 'O número inserido deve estar contido no intervalo selecionado.'

function aleatorio(max, min){
    return min + Math.floor((max - min) * Math.random())
}

function chuta(max,min){
    let count = 0
    do{
        guess = aleatorio(max,min)
        count++
        console.log(guess)
    }while(guess != Number(numUsuario.value))
    window.alert(`Este site precisou de ${count} tentativas para adivinhar seu número!`)
}

function adivinhar(){
    let intervalo =''
    if(numUsuario.value && Number.isInteger(Number(numUsuario.value))){
        for (i=0;i<selecao.length;i++){
            if(selecao[i].checked){
                intervalo = selecao[i].value 
            }
        }
        
        if (intervalo == 'menor'){
            if(Number(numUsuario.value) >= 0 && Number(numUsuario.value) <= 9){
                chuta(0,10)                
            }
            else{
                window.alert(msgIntervalo)
            }
        }
        else if (intervalo == 'maior'){
            if(Number(numUsuario.value) >= 0 && Number(numUsuario.value) <= 99){
                chuta(0,100)
            }
            else{
                window.alert(msgIntervalo)
            }
        }
    }
    else{
        window.alert('Por favor insira um número inteiro para ser adivinhado.')
    }

}