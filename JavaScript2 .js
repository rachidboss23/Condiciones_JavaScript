let span = document.querySelector('span')
let btnVerificar = document.getElementById('btn-verificar');

btnVerificar.addEventListener('click',function(){
    let a = Number(document.getElementById('input1').value);
    let b = Number(document.getElementById('input2').value);
    let c = Number(document.getElementById('input3').value);

    let suma = a+b+c
    if(suma > 10){
        span.innerHTML= 'Llevas demasiados stickers'
    }else if (suma >=1 && suma <=10){
        span.innerHTML='Llevas ' + suma + ' stickers'
    }else{
        span.innerHTML='No llevas ningun sticker'
    }
})

