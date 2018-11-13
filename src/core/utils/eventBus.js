// basic pub/sub event bus
// implementation from: https://gist.github.com/learncodeacademy/777349747d8382bfb722
export const EventBus = {
	events: {},

	/**
	 * Handle event trigger
     * @param {string} eventName
     * @param {function} fn
     */
	on(eventName, fn) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(fn);
	},

	/**
	 * Handle removing event subscription
     * @param {string} eventName
     * @param {function} fn
     */
	off(eventName, fn) {
		if (this.events[eventName]) {
			this.events.forEach( (event, i) => {
				if (this.events[eventName][i] === fn) {
					this.events[eventName].splice(i, 1);
					return false;
				}
			});
		}
	},

	/**
	 * Handle triggering of event
     * @param {string} eventName
     * @param {any} data
     */
	trigger(eventName, data) {
		if (this.events[eventName]) {
			this.events[eventName].forEach( fn => {
				fn(data);
			});
		}
	}
};
