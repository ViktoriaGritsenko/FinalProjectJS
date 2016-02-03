define(function() {
	function compareReverse(sortParameter){
		if (sortParameter=='author'){
				function compareAuthorReverse(bookA, bookB) {
					if (bookA.author < bookB.author) return 1;
					if (bookA.author > bookB.author) return -1;
					if (bookA.author = bookB.author) return 0;
				}
				return compareAuthorReverse;
		}
		
		else if(sortParameter=='title'){
				function compareTitleReverse(bookA, bookB) {
					if (bookA.title < bookB.title) return 1;
					if (bookA.title > bookB.title) return -1;
					if (bookA.title = bookB.title) return 0;
				}
				return compareTitleReverse;
		}
		
		else if(sortParameter=='publishers'){
			   function comparePublishersReverse(bookA, bookB) {
					if (bookA.publishers < bookB.publishers) return 1;
					if (bookA.publishers > bookB.publishers) return -1;
					if (bookA.publishers = bookB.publishers) return 0;
				}
				return comparePublishersReverse;
		}

		else if(sortParameter=='creationYear'){
				function compareCreationYearReverse(bookA, bookB) {
					return bookB.creationYear - bookA.creationYear;
				}
				return compareCreationYearReverse;
		}
		
		else if(sortParameter=='category'){
			   function compareCategoryReverse(bookA, bookB) {
					if (bookA.category < bookB.category) return 1;
					if (bookA.category > bookB.category) return -1;
					if (bookA.category = bookB.category) return 0;
				}
				return compareCategoryReverse;
		}
	}
return compareReverse;
});//define
