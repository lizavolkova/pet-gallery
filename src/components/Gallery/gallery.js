import './gallery.scss';

export class Gallery {
    /**
     * Load gallery
     */
    load() {
        window.addEventListener('resize', () => this.resizeAllGridItems(), true);
        this.resizeAllGridItems();
    }

    /**
     * Resize all grid items to create a staggered masonery style grid
     */
    resizeAllGridItems(){
        const allItems = document.getElementsByClassName("item");
        for(let x=0;x<allItems.length;x++){
            this.resizeGridItem(allItems[x]);
        }
    }

    /**
     * Resize individual grid item
     * code adapted from https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
     * @param {element} item
     */
    resizeGridItem(item) {
        const grid = document.getElementsByClassName('grid')[0];
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        const img = item.querySelector('img');
        const rowSpan = Math.ceil((img.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = "span " + rowSpan;
        item.style.backgroundImage = `url(${img.src})`;
        img.style.visibility = 'hidden';
    }
}