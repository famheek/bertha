import dashboardTmpl from './dashboard.html!';

import {speak} from '../../lib/speech';

const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];

function getTime(date) {
  let mins = Math.round(date.getMinutes() / 5) * 5;
  let direction = mins < 30;
  let hours = date.getHours() % 12;
  if (mins === 60) {
    hours = (hours + 1) % 12;
  }
  mins = direction ? mins : 60 - mins;

  let isHalf = mins > 15;
  if (isHalf) {
    hours++;
    mins = 30 - mins;
    direction = !direction;
    mins = Math.abs(mins);
  } else if (!direction) {
    hours++;
  }

  if (hours === 0) {
    hours = 12;
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

const dayparts = {
  6: 'Ochtend',
  12: 'Middag',
  18: 'Avond',
  23: 'Nacht'
};

function getDaypart(hour) {
  if (dayparts[hour] === undefined) {
    return getDaypart((hour + 23) % 24);
  }
  return dayparts[hour];
};

export default function berthaDashboard() {
  return {
    template: dashboardTmpl,
    scope: {
      date: '&',
      dashboard: '&',
      options: '&'
    },
    link: function(scope, element, attrs) {
      scope.$watch('date()', function(date) {
        if (!date) return;
        let dayOfWeek = days[date.getDay()];
        let dayOfMonth = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        let time = getTime(date).join(' ');
        let daypart = getDaypart(date.getHours());
        [scope.year, scope.month, scope.dayOfMonth, scope.dayOfWeek] = [year, month, dayOfMonth, dayOfWeek];
        // scope.todayText = ['vandaag is het', dayOfWeek.toUpperCase(), dayOfMonth, month, year].join(' ');
        let nowText = ['het is nu', time.toUpperCase(), 'in de', daypart.toUpperCase()].join(' ');
        if (scope.nowText !== nowText) {
          speak(nowText);
        }
        scope.nowText = nowText;
      });
    }
  }
}

berthaDashboard.$inject = []
