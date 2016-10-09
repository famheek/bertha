
const sec = 1000;
const min = 60 * sec;
const hour = 60 * min;

function nextTime(originTime, repeatMode) {
  let date = new Date(originTime);
  switch(repeatMode) {
    case "daily":
      date.setDate(date.getDate() + 1);
      break;
    case "weekly":
      date.setDate(date.getDate() + 7);
      break;
    case "montly":
      date.setMonth(date.getMonth() + 1);
      break;
    default:
      throw new Error(`Invalid repeat mode: ${repeatMode}`);
  }
  return date.getTime();
}

function firstFutureTime(originTime, repeatMode) {
  //return originTime;
  let futureTime = originTime;
  if (repeatMode !== 'never') {
    while (futureTime < Date.now()) {
      futureTime = nextTime(futureTime, repeatMode);
    }
  }
  return futureTime;
}

function parseDuration(durationText) {
  let [,hours] = (/([0-9]+)h/.exec(durationText) || []).map((n) => parseInt(n));
  let [,minutes] = (/([0-9]+)m/.exec(durationText) || []).map((n) => parseInt());

  let duration = (hours | 0) * hour + (minutes | 0) * min;
  return duration;
}

export default function ActiveNotifications() {
  return function(notifications) {
    if (!notifications) {
      return [];
    }
    return notifications.filter(function(notification) {
      let time = firstFutureTime(notification.timestamp, notification.repeatMode);
      let timeDiff = time - Date.now();
      let maxTimeDiff = parseDuration(notification.timeInAdvance);
      return timeDiff > 0 && timeDiff <= maxTimeDiff;
    });
  };
}
