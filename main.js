const colors = ['blue', 'red'];


function toggleBackgroundColor() {
    var body = document.body;
    var currentColor = window.getComputedStyle(body).backgroundColor;

    if (currentColor === 'rgb(255, 0, 0)') {
        body.style.backgroundColor = 'blue';
    } else {
        body.style.backgroundColor = 'red';
    }
}