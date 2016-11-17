import dashboardTmpl from './dashboard.html!';
import ttm from './time-till-moment';
import {speak} from '../../lib/speech';

const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];

function getTime(date) {

  let mins = Math.round(date.getMinutes() / 5) * 5;
  let hours = date.getHours() % 12;
  let direction = mins < 30;
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

function checkMode(time, mode, text) {
  let half = (time[2].toString().substr(0, 4) === "half" && !time[2]);
  let quarter = (time[0] === "kwart") ? true : false;
  if(mode === "5m") {
    return true;
  } else if(mode === "15m" && (half || quarter)) {
    return true;
  } else if(mode === "30m" && half) {
    return true;
  } else if(!time[0]) {
    return true;
  }
}

export default function berthaDashboard($filter) {
  return {
    template: dashboardTmpl,
    scope: {
      date: '&',
      dashboard: '&',
      options: '&'
    },
    link: function(scope, element, attrs) {

      scope.$watchCollection('[dashboard(), date()]', function([dashboard, date]) {
        if (!date) return;
        if (!dashboard) return;
        let dayOfWeek = days[date.getDay()];
        let dayOfMonth = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        let time = getTime(date).join(' ');
        let daypart = getDaypart(date.getHours());
        [scope.year, scope.month, scope.dayOfMonth, scope.dayOfWeek] = [year, month, dayOfMonth, dayOfWeek];
        // scope.todayText = ['vandaag is het', dayOfWeek.toUpperCase(), dayOfMonth, month, year].join(' ');
        let nowText = ['het is nu', time.toUpperCase(), 'in de', daypart.toUpperCase()].join(' ');
        let tts = scope.dashboard().settings.textToSpeech;
        let text = "";
        if(scope.nowText !== nowText && tts.time.enabled && checkMode(getTime(date), tts.time.repeatMode)) {
          text += nowText;
        }
        if(scope.nowText !== nowText && tts.notifications.enabled && checkMode(getTime(date), tts.notifications.repeatMode)) {
          let notifications = $filter('activeNotifications')(scope.dashboard().notifications);
          notifications.map((n) => console.log(n));
          console.log(ttm);
          notifications.map((notificationText) => {text += ', ' + notificationText.description});
        }
        if(text) {speak(text)}
        scope.nowText = nowText;
      });

      scope.$watchCollection('dashboard().notifications | activeNotifications', function(newValues, oldValues) {
        var newSet = new Set(newValues);
        oldValues.forEach((old) => newSet.delete(old));
        for (let newVal of newSet) {
          speak(newVal.description);
        }
      });
    }
  }
}

berthaDashboard.$inject = ['$filter']
