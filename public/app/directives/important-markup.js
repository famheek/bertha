export default function importantMarkup() {
  return {
  	restrict: 'A',
    link: function(scope, element, attrs) {

    	scope.$watch(attrs.importantMarkup, function(text) {
    		let html = (text || '').toString()
    			.split(' ')
          .filter((word) => word.length > 0)
    			.map((word) => (word === word.toUpperCase() ?
    				'<span class="important">' + word + '</span>' :
    				'<span>' + word + ' </span>'))
    			.join('');

			  element.html(html);
    	});

    }
  }
}

importantMarkup.$inject = [];
