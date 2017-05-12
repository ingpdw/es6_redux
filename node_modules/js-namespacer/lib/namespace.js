
/*
 * namespace - lib/namespace.js
 * Copyright(c) 2015 ingpdw <ingpdw@gmail.com>
 */

exports = module.exports = function namespace(){
  var _obj1, _obj2, args = Array.prototype.slice.call( arguments );
  var _mize = {};
  var _obj = args[ 0 ];

  if( !_obj ) return false;

  for( var i = 1; args[ i ]; i++ ){
    _obj1 = args[ i ].split( '.' );
    for( var j = 0; _obj1[ j ]; j++ ){
      _obj2 = _obj1[ j ];

      if( j == 0 ){
        if( !_obj[ _obj2 ] ) _obj[ _obj2 ] = {};
      }else{
        if( !_mize[ _obj2 ] ) _mize[ _obj2 ] = {};
      }
    }
  }
}
