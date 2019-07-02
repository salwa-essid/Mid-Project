
var iss = document.querySelectorAll('i')
for (var i = 0; i < iss.length; i++){
    var is = iss[i]
    var roug = function () {
    this.classList.toggle('red');
    }
    is.addEventListener('click', roug)
}

// document.querySelector('.left').onclick =
//     function(event) {
//         let span = event.target.parentNode.querySelector('p')
//         span.innerText ++
//     }

// var p = document.querySelectorAll('.coeur')
// window.setInterval(function(){
//     p.classList.toggle('red')
// },1000)
