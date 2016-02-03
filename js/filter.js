define(function() {
	function filter(specialTitle, array){
		var newArray=[];
		for (var i=0; i<array.length; i++){
			var str=array[i]['title'];
			if(str.indexOf(specialTitle)==0){
				newArray[newArray.length]=array[i];
			}
		}
		return newArray;
	}
	return filter;
});//define
