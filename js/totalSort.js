define(['deleteTable','createTable','sort', 'sortReverse'],function(deleteTable, createTable, compare, compareReverse) {
	 var sortHistory={author:"without",title:"without",category:"without",publishers:"without",creationYear:"without"}; //sortHistory['author']
		function sort(sortParameter,array) {
			var bool=false;
				if (sortHistory[sortParameter]=="without" || sortHistory[sortParameter]=="desc" ){
					bool=true;		
				}
			if(bool==true){
				sortHistory[sortParameter]="asc";
				return array.sort(compare(sortParameter));
			}
			else if (bool==false) {
				sortHistory[sortParameter]="desc";
				return array.sort(compareReverse(sortParameter));
			}
		}
	return 	sort;
});
