import './modal.scss';
import { EventBus } from '../../core/utils/eventBus';
import { EVENTS } from '../../core/constants/events';

export class Modal {
	constructor() {
		this.mainContent = document.querySelector('.content-wrapper');
		this.modal = document.getElementById('modal');
		this.overlay = document.querySelector('.modal-overlay');
		this.closeBtn = this.modal.querySelector('.modal-close-btn');
		this.img = this.modal.querySelector('img.main-img');

		this.overlay.addEventListener('click', () => this.close());
		this.closeBtn.addEventListener('click', () => this.close());

		EventBus.on(EVENTS.OPEN_MODAL, (url) => this.open(url));
	}

	close() {
		this.modal.classList.remove('open');
		this.mainContent.classList.remove('modal-open');
		EventBus.trigger(EVENTS.CLOSE_MODAL);
	}

	open(url) {
		this.mainContent.classList.add('modal-open');
		this.img.src = url;
		this.modal.classList.add('open');
	}
}