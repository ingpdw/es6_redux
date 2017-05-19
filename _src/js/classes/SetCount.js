/**
 * SetCount
 */
import Store from '../Store';
import {setCountAction} from '../actions';

class SetCount {
	constructor() {
    this.count = 10;
		this.selector = 'countButton';
    this.init();
		this.subscribe();
	}

  init() {
	  let $body = jQuery( 'body' );
    $body.append( this.template() );
    $body.on( 'click', `#${this.selector}`, () => {
			//@dispatch
      Store.dispatch( setCountAction( this.count ) );
    });
  }

  subscribe() {
		//@subscribe
    Store.subscribe( () => {
			let count = Store.getState().buttonCount;
			this.count = count;
			console.log( 'SetCount:subscribe::' + count );
      jQuery( `#${this.selector}`).text( count );
    });
  }

  template() {
    return `<button id="${this.selector}" type="button" class="button">${this.count}</button>`;
  }
};

module.exports = SetCount;
