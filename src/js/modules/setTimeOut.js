const timeId = () => {
    let block = document.querySelector('.t824__popup-container'),
        close = document.querySelector('.t824__popup-close'),
        windows = document.querySelectorAll('[data-close]');

    setTimeout(() => {
        if(block) {
            block.classList.add('t824__popup-container-visible', 'animate__animated', 'animate__fadeInUp');
        }
    }, 5000)

    if(close) {
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });
    
            // modal.style.display = "none";
            // document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });
    }
}

export default timeId;