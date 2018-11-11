import './core/styles/global.scss';
import { Gallery } from './components/Gallery/gallery';
// import { Modal } from './components/Modal/modal';

document.addEventListener('DOMContentLoaded', () => {
	const gallery = new Gallery();
	// const modal = new Modal();

	gallery.load();

});
