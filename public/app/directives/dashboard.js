import dashboardTmpl from './dashboard.html!';

const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];

function getTime(date) {
  [1,2,3].map((value, key) => value ** 2);
  let mins = Math.round(date.getMinutes() / 5) * 5;
  let direction = mins < 30;
  let hours = date.getHours() % 12;
  if (mins === 60) {
    hours += 1;
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
    return getDaypart((hour - 1) % 24);
  }
  return dayparts[hour];
};

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
        let dayOfWeek = days[date.getDay()];
        let dayOfMonth = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        let time = getTime(date).join(' ');
        let daypart = getDaypart(date.getHours());
        scope.todayText = ['vandaag is het', dayOfWeek.toUpperCase(), dayOfMonth, month, year].join(' ');
        scope.nowText = ['het is nu', time.toUpperCase(), 'in de', daypart.toUpperCase()].join(' ');
      });
    }
  }
}

berthaDashboard.$inject = []
