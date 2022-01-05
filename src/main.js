
function main() {

    const list = document.querySelectorAll('.container');
    const next = document.querySelectorAll('.right');
    const previous = document.querySelectorAll('.left');
    var current = 1;
    handleSlide();

    next.forEach(elm => { elm.addEventListener('click', (e) => { handleSlide(e, 'next'); }) });
    previous.forEach(elm => { elm.addEventListener('click', (e) => { handleSlide(e, 'previous'); }) });


    function handleSlide(e, direction) {
        // The step variable will be used for accesibility reasons when a user use the tab key to navigate through the site.
        var step = 0;

        // When the user click the right arrow
        if (direction === 'next') {
            current++;
            step = 'right';
            if (current > list.length) {
                current = 1;
            }
        }
        // When the user click the left arrow 
        else if (direction === 'previous') {
            current--;
            step = 'left';
            if (current < 1) {
                current = list.length;
            }
            // First time loading the page (Initial state)
        } else {
            current = 2;
        }
        // From the list of all testimoniales, make the element with the class name that matches the 'current' variable appear, and remove all the others.
        list.forEach(elm => {
            var id = 't' + current;
            if (elm.getAttribute('id') == id) {
                elm.setAttribute('class', 'container appear');
                if (step != 0) {
                    elm.querySelector('.' + step).focus();
                }
            } else {
                elm.setAttribute('class', 'container disappear');
            }
        })

    }
}

window.addEventListener('DOMContentLoaded', main);