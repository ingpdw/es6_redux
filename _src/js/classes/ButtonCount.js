/**
 * Decrement
 */
import Store from '../Store';
import {setButtonCountAction} from '../actions';

class ButtonCount {
	constructor() {
    this.selector = "txtButtonCount";
    this.init();
	}

  init() {
    let $body = jQuery( 'body' );
    $body.append( this.template() );
    $body.on( 'keyup', `#${this.selector}`, ( evt ) => {
      let $this = jQuery( evt.target );
      let val = $this.val().replace( /\s/g, '' );
      //@dispatch
      Store.dispatch( setButtonCountAction( ( !isNaN( val ) && val )? evt.target.value: 0 ) )
    });
  }

  template() {
    return `<input id="${this.selector}" type="text" name="count" maxlength="3"/>`;
  }
};

module.exports = ButtonCount;
