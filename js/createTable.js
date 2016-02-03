define(['deleteTable','totalSort'],function(deleteTable,  sort) {
	   
	function createTable(array, start, end){
		//create table
		 var parentElem = document.body;
		 var newTable=document.createElement('table');
		 newTable.id ="newTable";
		 parentElem.appendChild(newTable);
			 
		//create header 
		var newRow=document.createElement('tr');
		newRow.id="headerRow";
		newRow.class="header";
		
		//event that occurs when the client makes click
		newRow.addEventListener('click',function (e) {
		if (e.target && e.target.nodeName =="TD") {
			sort(e.target.textContent,array);	
			}
		});
		
		newTable.appendChild(newRow);
		var newCell=document.createElement('td');
		for (var key in array[0]){
			var newCell=document.createElement('td');
			newCell.class="h";
			newCell.id="headerCell";
			newCell.innerText = key;
			newRow.appendChild(newCell);
		}
	
		//create table content
		for (var i=start;i<end+1;i++){
			newTable.appendChild(newRow);
			var newRow=document.createElement('tr');

			for (var key in array[i]){
				if (key=="image"){
				 var newCell=document.createElement('td');
				 newRow.appendChild(newCell);
				 var newImg = document.createElement('IMG');
				 newImg.class="cellStyles";
				 newImg.src=array[i]['image'];
				 newImg.style.width="75px";
				 newImg.style.height="75px";
				 newCell.appendChild(newImg);
				}
				else {
				var newCell=document.createElement('td');
				newCell.innerText = array[i][key];
				newRow.appendChild(newCell);
				}
			}
		}	
	}
	return createTable;


});
