define(function() {
	function compare(sortParameter){
		if (sortParameter=='author'){
				function compareAuthor(bookA, bookB) {
					if (bookA.author > bookB.author) return 1;
					if (bookA.author < bookB.author) return -1;
					if (bookA.author = bookB.author) return 0;
				}
				return compareAuthor;
		}
		
		else if(sortParameter=='title'){
				function compareTitle(bookA, bookB) {
					if (bookA.title > bookB.title) return 1;
					if (bookA.title < bookB.title) return -1;
					if (bookA.title = bookB.title) return 0;
				}
				return compareTitle;
		}
		
		else if(sortParameter=='publishers'){
			   function comparePublishers(bookA, bookB) {
					if (bookA.publishers > bookB.publishers) return 1;
					if (bookA.publishers < bookB.publishers) return -1;
					if (bookA.publishers = bookB.publishers) return 0;
				}
		}

		else if(sortParameter=='creationYear'){
				function compareCreationYear(bookA, bookB) {
					return bookA.creationYear - bookB.creationYear;
				}
				return compareCreationYear;
		}
		
		else if(sortParameter=='category'){
			   function compareCategory(bookA, bookB) {
					if (bookA.category > bookB.category) return 1;
					if (bookA.category < bookB.category) return -1;
					if (bookA.category = bookB.category) return 0;
				}
				return compareCategory;
		}
	}
return compare;
});//define
