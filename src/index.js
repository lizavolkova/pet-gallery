import './core/global.scss';
import { Gallery } from './components/Gallery/gallery';

document.addEventListener("DOMContentLoaded", () => {
    const gallery = new Gallery();
    gallery.load();
});
