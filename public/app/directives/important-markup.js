import moment from 'moment';
import ttm from '../../lib/ttm';

export default function importantMarkup() {
  return {
  	restrict: 'A',
    link: function(scope, element, attrs) {

    	scope.$watch(attrs.importantMarkup, function(notification) {

				if(!notification){return}
				let html;

				if(notification.timestamp) {
					html = ttm(notification.description, notification.timestamp);
				} else {
					html = notification;
				}

    		html
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
