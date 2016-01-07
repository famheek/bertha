import dashboardTmpl from './dashboard.html!';

const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];

function getTime(date) {
  let mins = Math.round(date.getMinutes() / 5) * 5;
  let direction = mins < 30;
  mins = direction ? mins : 60 - mins;
  let hours = date.getHours() % 12;

  let isHalf = mins > 15;
  if (isHalf) {
    mins = 30 - mins;
    direction = !direction;
    mins = Math.abs(mins);
  }

  if (mins === 15) {
    mins = 'kwart';
  }

  direction = direction ? 'over' : 'voor';

  if (mins === 0 && !isHalf) {
    hours += ' uur';
  } else if (isHalf) {
    hours = 'half ' + hours;
  }

  if (mins === 0) {
    mins = '';
    direction = '';
  }

  return [mins, direction, hours];
}

export default function berthaDashboard() {
  return {
    template: dashboardTmpl,
    scope: {
      date: '&',
      notifications: '=',
      options: '&'
    },
    link: function(scope, element, attrs) {

      scope.$watch('date()', function(date) {
        if (!date) return;
        scope.dayOfWeek = days[date.getDay()];
        scope.dayOfMonth = date.getDate();
        scope.month = months[date.getMonth()];
        scope.year = date.getFullYear();
        [scope.minutes, scope.minutesDirection, scope.hours] = getTime(date);
      })

    }
  }
}

berthaDashboard.$inject = []
