
let img = document.getElementById('img')
let button = document.getElementById('button1')

img.addEventListener('click', function(){
    let border = img.style.border
    if(border === '0px'){
        img.style.border='3px solid red'

    }else{
        img.style.border='0px'
    }
})

boton.addEventListener('click',function(){
    window.location.href = 'index2.html'
})
