/**
 * Main
 */
import Increment from './classes/Increment';
import Decrement from './classes/Decrement';
import SetCount from './classes/SetCount';
import ButtonCount from './classes/ButtonCount';
import DisplayCount from './classes/DisplayCount';

class Main {
	constructor() {
		this.init();
  }

  init() {
    let increment = new Increment();
    let decrement = new Decrement();
    let setCount = new SetCount();
		let buttonCount = new ButtonCount();
    let displayCount = new DisplayCount();
  }
};

module.exports = Main;
