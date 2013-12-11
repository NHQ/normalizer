module.exports = function(min, max, rmin, rmax){

	if(!rmin) rmin = 0;
	if(!rmax) rmax = 1;
	var d = max - min;
	var r = rmax - rmin;

	return function(v){

		return rmin + (v - min) * r / d
	
	}

}
