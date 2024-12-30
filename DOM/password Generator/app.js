let lt =['QWERTYUIOPASDFGHJKLZXCVBNM','qwertyuiopasdfghjklzxcvbnm','1234567890','!@#$%^&*()_+-=[]{};:,.<>/?']

var allcheckBox = document.querySelectorAll('input[type = checkbox]')
var generator = document.querySelector('.button')
var length = document.querySelector('input[type =number]')
var text = document.querySelector('input[type=text]')
var clipborad = document.querySelector('.fa-clipboard')

generator.addEventListener('click',() => {
    let totalchar = '';
    allcheckBox.forEach((checkBox,index) =>{
        if(checkBox.checked){
            totalchar +=lt[index]
        }
    })
    let finalpass = '';
    for( i =0; i< length.value; i++){
        finalpass += totalchar.charAt(Math.floor(Math.random()*totalchar.length))
    } 
    text.innerHTML = finalpass;
    console.log(finalpass)
    console.log(text.innerHTML)

})
clipborad.addEventListener('click', () => {
    let copy = text.innerHTML
    console.log(copy)
    navigator.clipboard.writeText(copy)
})



 