/**
 * Check if element is in viewport
 * From http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
 * @param {object} el
 * @returns {boolean} is element in viewport
 */
export const isInViewport = (el) => {
	const rect = el.getBoundingClientRect();
	const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

	const isInVerticalViewport = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
	const isInHorizontalViewport = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

	return (
		isInVerticalViewport && isInHorizontalViewport
	);
};
