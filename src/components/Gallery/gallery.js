import './gallery.scss';
import { EventBus } from '../../core/utils/eventBus';
import { EVENTS } from '../../core/constants/events';

export class Gallery {
    constructor() {
        this.galleryContainer = document.getElementById("gallery-comp");
        this.images = Array.from(this.galleryContainer.querySelectorAll('img.gallery-image'));
        this.items = Array.from(this.galleryContainer.querySelectorAll('.item'));
        window.addEventListener('resize', () => this.resizeAllGridItems(), true);

        this.items.forEach( item => {
           item.addEventListener('click', this.openModal);
        })
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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // create dummy Image element
                    const imgToDownload = new Image();
                    imgToDownload.src = img.dataset.src;

                    // when the image src is downloaded, animate it in, and resize the masonry grid
                    imgToDownload.onload = () => {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        this.resizeAllGridItems();
                    };
                    observer.unobserve(entry.target);
                }
            })
        });

        this.images.forEach( image => {
            observer.observe(image);
        })
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

            item.style.gridRowEnd = "span " + rowSpan;
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