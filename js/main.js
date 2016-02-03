require(['data','deleteTable','createTable','totalSort', 'filter','jQuery'], function (data, deleteTable, createTable, sort, filter, jQuery ){
	
	//modify json format in data (module "data")
	var books = JSON.parse(data);
		
	var newTable = document.getElementById('newTable');

	//define the amount of items displayed on one page 
	var param = Math.ceil(books.length/3);

	createTable(books, 0, param);

      
	//pagination 1,2,3
	var pageOne = document.getElementById('first');
	pageOne.addEventListener('click',function (e) {
		if (e.target) {
			deleteTable(newTable);
			createTable(books, 0, param);
		}
	});

		var pageTwo = document.getElementById('second');
		pageTwo.addEventListener('click',function (e) {
		if (e.target) {
			deleteTable(newTable);
			createTable(books, param, param*2);
			}
		});
	
		var pageThree = document.getElementById('third');
		pageThree.addEventListener('click',function (e) {
		if (e.target) {
			deleteTable(newTable);
			createTable(books, 2*param, param*3);
			}
		});

		//pagination forward
		var pageForward = document.getElementById('forwardMod');	
		pageForward.addEventListener('click',function (e) {
			if (e.target) {
					field = document.getElementsByTagName('tr')[1]; 
					var author = field.getElementsByTagName('td')[0].innerText;
					var title = field.getElementsByTagName('td')[1].innerText;
					for (var i=0; i<books.length; i++){		
						if(books[i]['author'] == author && books[i]['title'] ==title ){
							deleteTable(newTable);	
							if ((i+param)<books.length){
								createTable(books, i+param, i+2*param);		
							}
							else createTable(books, i, books.length);		
						}	
					}
				}
		});
		
		//pagination backward
		var pageBackward = document.getElementById('backwardMod');
		pageBackward.addEventListener('click',function (e) {
			if (e.target) {
				field = document.getElementsByTagName('tr')[1]; 
				var author = field.getElementsByTagName('td')[0].innerText;
				var title = field.getElementsByTagName('td')[1].innerText;
				for (var i=0; i<books.length; i++){
					if(books[i]['author'] == author && books[i]['title'] ==title ){
						deleteTable(newTable);				
						if (i > 0){
							createTable(books, i-param, i);									
						}
						else createTable(books, 0, 5);	
					}
				}	
			}
		});
	
	//	filter by title (module "filter")
	var filterParameterButton = document.getElementById('submit');
	var filterParameter = document.getElementById('filterParameter');
	filterParameterButton.addEventListener('click',function (e) {
		if (e.target) {
			e.preventDefault();
			var specialTitle=filterParameter.value;
			deleteTable(newTable);
			var newBooks = filter (specialTitle, books)
			createTable(newBooks, 0, newBooks.length);
		}
	});
	
	//	display all the array 
	var showAllData = document.getElementById('showAllData');
	showAllData.addEventListener('click',function (e) {
		if (e.target) {
			deleteTable(newTable);
			createTable(books, 0, books.length);
		}
	});
	
	//event that occurs when the client makes click
	var headerRow = document.getElementById('headerRow');
	headerRow.addEventListener('click',function (e) {
		if (e.target) {
			deleteTable(newTable);
			createTable(books,0,param);		
		}
	});
	
});
	
		
		