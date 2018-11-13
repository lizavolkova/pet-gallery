/**
 * Resolve promise when image has loaded
 * @param {element} image
 * @returns {Promise} Promise
 */
export const imageLoaded = (image) => {
	return new Promise((res, rej) => {
		const imgToDownload = new Image();
		const src = image.dataset.src;
		imgToDownload.src = src;

		imgToDownload.onload = () => res({src, status: 'ok'});
		imgToDownload.onerror = () => rej({src, status: 'error'});
	});
};
