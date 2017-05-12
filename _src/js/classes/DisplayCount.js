/**
 * DisplayCount
 */
import Store from '../Store';

class DisplayCount {
	constructor() {
    this.selector = 'display';
    this.init();
		this.subscribe();
	}

  init() {
    jQuery( 'body' ).append( this.template() );
  }

  subscribe() {
		//@subscribe
    Store.subscribe( () => {
			let count = Store.getState().myCount.count;
      jQuery( `#${this.selector}`).text( Store.getState().myCount.count );
    });
  }

  template() {
    return `<span id="${this.selector}">${Store.getState().myCount.count}</span>`;
  }
};

module.exports = DisplayCount;
