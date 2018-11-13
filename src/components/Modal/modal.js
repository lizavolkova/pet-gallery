import './modal.scss';
import { EventBus } from '../../core/utils/eventBus';
import { EVENTS } from '../../core/constants/events';

export class Modal {
	constructor() {
		this.modal = document.getElementById('modal');
		this.overlay = document.querySelector('.modal-overlay');
		this.closeBtn = this.modal.querySelector('.modal-close-btn');
		this.img = this.modal.querySelector('img.main-img');

		this.overlay.addEventListener('click', () => this.close());
		this.closeBtn.addEventListener('click', () => this.close());

		EventBus.on(EVENTS.OPEN_MODAL, (url) => this.open(url));
	}

	/**
	 * Close modal
     */
	close() {
		this.modal.classList.remove('open');
		document.body.classList.remove('modal-open');
		EventBus.trigger(EVENTS.CLOSE_MODAL); // event not used in this iteration of the project, placeholder for now
	}

	/**
	 * Open modal
     * @param {string} url to image
     */
	open(url) {
		document.body.classList.add('modal-open');
		this.img.src = url;
		this.modal.classList.add('open');
	}
}