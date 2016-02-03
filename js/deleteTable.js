define(function() {
function deleteTable(table){
	   var table = document.getElementsByTagName('table')[0];
		document.body.removeChild(table);
}
return deleteTable;
});//define
