import moment from 'moment';

export default function timeTillMoment($compile) {
  return {
  	restrict: 'A',
    link: function(scope, element, attrs) {

    	scope.$watch(attrs.timeTillMoment, function(notification) {
            let html = '';
            let dTime = notification['timestamp'] - Date.now();
            let m = Math.round((dTime/60000)-(dTime%60000/1000)) + 1;    
    		let words = (notification['description'] || '').toString()
    			words.split(' ').filter((word) => word.length > 0).map((word) => {
                html += (html !== '' ? ' ' : '') + (word === '-begrip-' ? m.toString() + ' minuten' : word);
            });
			element.html('<span>' + html + '</span>');
            $compile(element.contents())(scope);
    	});

    }
  }
}

timeTillMoment.$inject = ['$compile'];