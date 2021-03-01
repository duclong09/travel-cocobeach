 window.onscroll = () => {
        if (window.pageYOffset > 50) {
          document
            .getElementById("top-header")
            .classList.add("top-header--white-background");
        } else {
          document
            .getElementById("top-header")
            .classList.remove("top-header--white-background");
        }
};


const navigation = document.querySelector('nav');
window.addEventListener('scroll', () => {
    console.log("duclong");
    (window.scrollY > 30) ? navigation.classList.add('anim-nav') : navigation.classList.remove('anim-nav');
})

window.addEventListener('click', (e) => {
    console.log("long");
    const round = document.createElement('div');
    round.className = 'clickAnim';
    round.style.top = `${e.pageY - 50}px`;
    round.style.left = `${e.pageX - 50}px`;
    document.body.appendChild(round);

    setTimeout(() => {
        round.remove();
    },1500);
})