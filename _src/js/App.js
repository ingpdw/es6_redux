/**
 * App
 */

//Main class를 Main으로 import
import Main from './Main';
import namespacer from 'js-namespacer';

( function( $, window ) {
  'use strict';

  //import한 Main class를 window.my.Project에 할당한다.
  //new my.Project()으로 사용 가능
  namespacer( window, 'my.Project' );
  window.my.Project = Main;

}( window.jQuery, window ));
