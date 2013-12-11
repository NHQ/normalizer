# normalizer
This is a normal normalizer.  The module is a function that takes 4 arguments:
* min value of set
* max value of set
* min normalized value
* max normalized value

The last two are optional, and wil default to 0 and 1 respectively.

It returns a function that takes a single param, a value from the given set
```
npm install normalizer
```
## usage
```js
var normr = require('normalizer');
var set = [1234, 2345, 3456, 4567]
var normalize = normr(1234, 4567, 0, 1)
for(var t = 0; t <  set.length; t++){
	console.log(normalize(set[t]));
}
```
What we have done here is created a function that will normalize the values in set to values between zero and one.  One need not use a set, but simply set a min and max, and pass values to the returned function.  Of course, if you pass value that is outside of the min/max, you will get a normalized value outside of the normalized min/max.  

If you want to normalize a set, use [normalize-set](https://npmjs.org/package/normalize-set)

There is yet another take on normalization for durations of time, in [normalize-time](https://npmjs.org/package/normalize-time)

## test
to run the tests:
```
npm install tape
node test.js
```
 

