window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var underlineBar = document.getElementById('underline-bar');
    var maxScroll = document.body.scrollHeight - window.innerHeight;
    var scrollPosition = window.scrollY;
    var scrollPercentage = (scrollPosition / maxScroll) * 100;
    underlineBar.style.width = scrollPercentage + '%';

    if (scrollPosition > 50) {
        header.classList.add('blur');
    } else {
        header.classList.remove('blur');
    }
});
