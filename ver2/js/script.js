/* Activates when scrolled */
document.addEventListener('scroll', yScroll);

function yScroll() {
    const yPos = window.pageYOffset;

    if (yPos > 10) {
        document.getElementById('top-btn').style.bottom = '10px';
    } else {
        document.getElementById('top-btn').style.bottom = '-50px';
    }
}

function ScrollTop() {
    let i = window.pageYOffset;

    var intervalTimer = setInterval(() => {
            if (i > 0) {
        window.scrollTo(0, i);
        i -= 15;
    } else {
        document.getElementById('top-btn').style.bottom = '-50px';
        clearInterval(intervalTimer);
    }
}, 0.5);
}
