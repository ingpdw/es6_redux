/**
 * Decrement
 */
import Store from '../Store';
import {decrementAction} from '../actions';

class Decrement {
	constructor() {
		this.selector = 'decrementButton';
    this.init();
	}

  init() {
		let $body = jQuery( 'body' );
    $body.append( this.template() );
    $body.on( 'click', `#${this.selector}`, () => {
			//@dispatch
      Store.dispatch( decrementAction() );
    });
  }

  template( selector ) {
    return `<button id="${this.selector}" type="button" class="button">-</button>`;
  }
};

module.exports = Decrement;
