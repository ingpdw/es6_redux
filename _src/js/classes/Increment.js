/**
 * Increment
 */
import Store from '../Store';
import {incrementAction} from '../actions';

class Increment {
	constructor() {
		this.selector = 'incrementButton';
    this.init();
	}

  init() {
    let $body = jQuery( 'body' );
    $body.append( this.template() );
    $body.on( 'click', `#${this.selector}`, () => {
			//@subscribe
      Store.dispatch( incrementAction() );
    });
  }

  template( selector ) {
    return `<button id="${this.selector}" type="button" class="button">+</button>`;
  }
};

module.exports = Increment;
