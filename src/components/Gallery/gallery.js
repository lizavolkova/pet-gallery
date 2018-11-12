import './gallery.scss';
import { EventBus } from '../../core/utils/eventBus';
import { isInViewport } from '../../core/utils/isInViewport';
import { EVENTS } from '../../core/constants/events';

export class Gallery {
	constructor() {
		// define elements
		this.galleryContainer = document.getElementById('gallery-comp');
		this.images = Array.from(this.galleryContainer.querySelectorAll('img.gallery-image'));
		this.notLoadedImages = this.images;
		this.items = Array.from(this.galleryContainer.querySelectorAll('.item'));

		// add event listners
		window.addEventListener('resize', () => this.resizeAllGridItems(), true);
		window.addEventListener('scroll', () => this.lazyLoadImages(), true);
		EventBus.on(EVENTS.CLOSE_MODAL, () => this.resizeAllGridItems());

		this.items.forEach( item => {
			item.addEventListener('click', this.openModal);
		});
	}

	/**
     * Load gallery
     */
	load() {
		//TODO: trigger resize on window orientation change

		this.lazyLoadImages();
	}

	/**
     * Lazy load images as they enter the viewable area on scroll
     */
	lazyLoadImages() {
		this.notLoadedImages.forEach( (image, index) => {
			if (isInViewport(image) && !image.classList.contains('loaded') ) {
				const imgToDownload = new Image();
				imgToDownload.src = image.dataset.src;
				this.notLoadedImages.splice(index, 1);
				imgToDownload.onload = () => {
					image.src = image.dataset.src;
					image.classList.add('loaded');
					this.resizeAllGridItems();
				};
			}
		});
	}

	/**
     * Resize all grid items to create a staggered masonery style grid
     */
	resizeAllGridItems(){
		const allItems = document.getElementsByClassName('item');
		for(let i = 0; i < allItems.length ; i ++){
			this.resizeGridItem(allItems[i]);
		}
	}

	/**
     * Resize individual grid item
     * code adapted from https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
     * @param {element} item
     */
	resizeGridItem(item) {
		// find the image inside the grid item
		const img = item.querySelector('img');

		// only resize the grid item if the image inside has loaded
		if (img.classList.contains('loaded')) {
			const grid = document.getElementsByClassName('grid')[0];
			const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
			const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
			const rowSpan = Math.ceil((img.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

			item.style.gridRowEnd = 'span ' + rowSpan;
			item.style.backgroundImage = `url(${img.src})`;
			item.classList.add('loaded');
			img.style.visibility = 'hidden';
		}
	}

	openModal(e) {
		const image = e.currentTarget.querySelector('img');
		EventBus.trigger(EVENTS.OPEN_MODAL, image.src);
	}
}