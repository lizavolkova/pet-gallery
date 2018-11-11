import './modal.scss';
import { EventBus } from '../../core/utils/eventBus';
import { EVENTS } from '../../core/constants/events';

export class Modal {
    constructor() {
        this.modal = document.getElementById("modal");
        this.overlay = this.modal.querySelector('.modal-overlay');
        this.closeBtn = this.modal.querySelector('.modal-close-btn');
        this.img = this.modal.querySelector('img');

        this.overlay.addEventListener('click', () => this.close());
        this.closeBtn.addEventListener('click', () => this.close());

        EventBus.on(EVENTS.OPEN_MODAL, (url) => this.open(url));
    }

    close() {
        this.modal.classList.remove('open');
    }

    open(url) {
        this.img.src = url;
        this.modal.classList.add('open');
    }
}