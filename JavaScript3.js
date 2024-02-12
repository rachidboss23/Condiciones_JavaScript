let span = document.querySelector('span')
let botonIngresar = document.getElementById('botonIngresar')

botonIngresar.addEventListener('click',function(){
    let select1 = document.getElementById('number1').value
    let select2 = document.getElementById('number2').value
    let select3 = document.getElementById('number3').value

    let clave = select1+select2+select3

    if(clave === '911'){
        span.innerHTML='Password 1 Correcto'
    }else if (clave === '714'){
        span.innerHTML='Password 2 Correcto'
    }else{
        span.innerHTML='Password Incorrecto'
    }

})

botonVolver.addEventListener('click',function(){
    window.location.href='index2.html'
})
