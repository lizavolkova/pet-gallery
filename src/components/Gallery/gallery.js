import './gallery.scss';
import { EventBus } from '../../core/utils/eventBus';
import { isInViewport } from '../../core/utils/isInViewport';
import { EVENTS } from '../../core/constants/events';

const LOADED = 'loaded';

export class Gallery {
	constructor() {
		// define elements
		this.galleryContainer = document.getElementById('gallery');
		this.items = Array.from(this.galleryContainer.querySelectorAll('.item'));

		// add event listners
		window.addEventListener('resize', () => this.resizeAllGridItems(), true);
		window.addEventListener('scroll', () => this.lazyLoadImages(), true);

		this.items.forEach( item => {
			item.addEventListener('click', this.openModal);
		});
	}

	/**
     * Load gallery
     */
	load() {
		this.lazyLoadImages();
	}

	/**
     * Lazy load images as they enter the viewable area on scroll
     */
	lazyLoadImages() {
		this.items.forEach( item => {
			const image = item.querySelector('img');

			if (isInViewport(item) && !image.classList.contains(LOADED) ) {
				const imgToDownload = new Image();
				imgToDownload.src = image.dataset.src;

				imgToDownload.onload = () => {
					image.src = image.dataset.src;
					item.classList.add(LOADED);
					this.resizeAllGridItems();
				};
			}
		});
	}

	/**
     * Resize all grid items to create a staggered masonery style grid
     */
	resizeAllGridItems(){
		this.items.forEach( (item, i) => {
			this.resizeGridItem(this.items[i]);
		});
	}

	/**
     * Resize individual grid item
     * code adapted from https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
     * @param {element} item
     */
	resizeGridItem(item) {
		// only resize the grid item if the image inside has loaded
		if (item.classList.contains(LOADED)) {
			const img = item.querySelector('img');
			const grid = document.getElementsByClassName('grid')[0];
			const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
			const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
			const rowSpan = Math.ceil((img.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

			item.style.gridRowEnd = 'span ' + rowSpan;
			item.style.backgroundImage = `url(${img.src})`;
			item.classList.add(LOADED);
			img.style.visibility = 'hidden';
		}
	}

	/**
	 * Trigger modal opening
     * @param {object} e
     */
	openModal(e) {
		const image = e.currentTarget.querySelector('img');
		EventBus.trigger(EVENTS.OPEN_MODAL, image.src);
	}
}