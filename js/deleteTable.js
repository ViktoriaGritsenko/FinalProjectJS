define(function() {
//функция для удаления таблицы
function deleteTable(table){
	   var table = document.getElementsByTagName('table')[0];
		document.body.removeChild(table);
}
return deleteTable;
});//define
