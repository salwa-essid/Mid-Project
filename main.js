
var iss = document.querySelectorAll('.coeur')
for (var i = 0; i < iss.length; i++){
    var is = iss[i]
    var roug = function () {
    this.classList.toggle('red');
    }
    is.addEventListener('click', roug)
}



document.querySelector('.fa-chevron-right').onclick =
    function(event) {
        let span = event.target.parentNode.querySelector('span')
        let spanT = event.target.parentNode.childNodes[1].childNodes[1]querySelector()
        span.innerText ++
    }
