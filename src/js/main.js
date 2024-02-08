import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from "./modules/timer";
import images from "./modules/images";
import animation from "./modules/animations";
import scrolling from "./modules/scrolling";

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};
    let deadline = '2024-09-09';

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms();
    timer('.container1', deadline);
    images();
    animation();
    scrolling(".btnup");
    
});