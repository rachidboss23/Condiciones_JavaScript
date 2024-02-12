let span = document.querySelector('span')
let botonVerificar = document.getElementById('botonVerificar');

botonVerificar.addEventListener('click',function(){
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

botonVolver.addEventListener('click',function(){
    window.location.href = 'index.html'
})

botonSiguiente.addEventListener('click',function(){
    window.location.href = 'index3.html'
})