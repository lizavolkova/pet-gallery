import './core/styles/global.scss';
import { Gallery } from './components/Gallery/gallery';
import { Modal } from './components/Modal/modal';

// Prevent Chrome from remembering last scroll state
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
if ('scrollRestoration' in history) {
	// Back off, browser, I got this...
	history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
	// on load and page refresh, make sure that page starts scrolling at the top,
	// otherwise there are rendering issues as the images load into the gallery
	window.scrollTo(0, 0);

	const gallery = new Gallery();
	// eslint-disable-next-line no-unused-vars
	const modal = new Modal();

	gallery.load();
});

