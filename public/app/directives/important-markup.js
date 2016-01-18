export default function importantMarkup() {
  return {
  	restrict: 'A',
    link: function(scope, element, attrs) {

    	scope.$watch(attrs.importantMarkup, function(text) {
    		var html = text
    			.split(' ')
    			.map((word) => (word === word.toUpperCase() ? 
    				'<span class="important">' + word + '</span>' :
    				'<span>' + word + '</span>'))
    			.join('');

			element.html(html);
    	});
    	
    }
  }
}

importantMarkup.$inject = [];