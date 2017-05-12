# js-namespacer

declare a namespace in JavaScript

## Install

```
$npm install js-namespacer
```

## Usage
```
import namespacer from 'js-namespacer';
namespacer( window, 'obj1', 'obj2' );
//window.obj1 = {};
//vindow.obj2 = {};


import namespacer from 'js-namespacer';
var myObj = {};
namespacer( myObj, 'abc.cd' );
//myObj.abc.cd = {};
```

## License
© 2015 ingpdw. MIT License
