
// ---------------------------
// REVEAL 
// -----------------------------

window.addEventListener('scroll', reveal);

// var reveal = () => {
//     var reveals = document.querySelectorAll('.reveal');

//     for(var i = 0; i < reveals.length; i++) {
//         var windowHeight = window.innerHeight;
//         var revealTop = reveals[i].getBoundingClientRect().top;
//         var revealPoint = 50;

//         if(revealTop < windowHeight - revealPoint) {
//             reveals[i].classList.add("active")
//         }
//     }
// }

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top
            var revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
}

// ---------------------------
// TEXT TYPING 
// -----------------------------

const texts = ['Photography', 'Modern Society', 'Passionate'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

// INVOKE THE FUNCTION WITHOUT CALLING

(function type() {
    if( count == texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0,++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type, 150);

}());