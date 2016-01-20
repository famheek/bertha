
function nextTime(notification) {
  return 0;
}

export default function ActiveNotifications() {
  return function(notifications) {
    if (!notifications) {
      return [];
    }
    return notifications.filter(function(notification) {
      let time = nextTime(notification);

      return notification.repeatMode !== "never" ||
             notification.timestamp > Date.now();
    });
  };
}
