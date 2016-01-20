export default function importantMarkup() {
  return {
  	restrict: 'A',
    link: function(scope, element, attrs) {

    	scope.$watch(attrs.importantMarkup, function(text) {
        function importance(word) {
          if (word.lastIndexOf('!') === word.length - 1) {
            return {word: word.slice(0, -1), important: true};
          } else {
            let important = word === word.toUpperCase() && word !== word.toLowerCase();
            return {word, important};
          }
        }
    		let html = (text || '').toString()
    			.split(' ')
          .filter((word) => word.length > 0)
          .map(importance)
    			.map(({word, important}) => (important ?
    				'<span class="important">' + word + '</span>' :
    				'<span>' + word + ' </span>'))
    			.join('');

			  element.html(html);
    	});

    }
  }
}

importantMarkup.$inject = [];
