import notificationTmpl from './notification.html!';

export default function berthaNotification() {
  return {
    template: notificationTmpl,
    scope: {
      notification: '&',
      editable: '&'
    },
    link: function(scope, element, attrs) {

    }
  }
}

berthaNotification.$inject = [];
