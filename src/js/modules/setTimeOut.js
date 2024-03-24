const timeId = () => {
    let block = document.querySelector('.t824__popup-container'),
        close = document.querySelector('.t824__popup-close'),
        windows = document.querySelectorAll('[data-close]');

    setTimeout(() => {
        if(block) {
            block.classList.add('t824__popup-container-visible', 'animate__animated', 'animate__fadeInUp');
        }
    }, 60000)

    if(close) {
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });
        });
    }

    // setInterval(() => {
    //     if(block.close) {
    //         block.classList.toggle('t824__popup-container-visible', 'animate__animated', 'animate__fadeInUp');
    //     }
    // }, 1000)
}

export default timeId;