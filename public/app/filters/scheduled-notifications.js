export default function ScheduledNotifications() {
  return function(notifications) {
    if (!notifications) {
      return [];
    }
    return notifications.filter(function(notification) {
      return notification.repeatMode !== "never" ||
             notification.timestamp > Date.now();
    });
  };
}
