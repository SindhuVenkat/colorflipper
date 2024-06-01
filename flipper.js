var button = document.querySelector('button')
var body = document.body;

button.addEventListener('click',()=>{
    var test = '#'+Math.floor(Math.random()*10000)
     body.style.backgroundColor = test
})

