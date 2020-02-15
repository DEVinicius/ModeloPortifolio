/*Seleção dos elementos */
const query = document.querySelectorAll('[data-anime]');

/*Nome da classe criada dinamicamente */
const ScrollClass = 'animate';

function scrollAnimation(){
    var windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    query.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(ScrollClass);
        }
        else{
            element.classList.removeS(ScrollClass);
        }
    });
}

window.addEventListener("scroll", function(){
    scrollAnimation();
});