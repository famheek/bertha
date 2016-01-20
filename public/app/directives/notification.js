import notificationTmpl from './notification.html!';
import '../../style/notification.css!';

import moment from 'moment';

export default function berthaNotification() {
  return {
    template: notificationTmpl,
    scope: {
      notification: '&',
      forceExpand: '&',
      showAddBtn: '&',
      onAdd: '&',
      removable: '&',
      onRemove: '&'
    },
    link: function(scope, element, attrs) {
      scope.expanded = false;
      scope.clickExpanded = false;
      scope.mouseIn = false;

      scope.$watchCollection('[date, time]', function([date,time]) {
        if (date && time) {
          let [, hours, minutes] = (/^([0-9]{2}):([0-9]{2})$/.exec(time) || []).map((str) => parseInt(str));
          let dateWithTime = new Date(date);
          dateWithTime.setHours(hours);
          dateWithTime.setMinutes(minutes);
          console.log(dateWithTime.toLocaleString());
          scope.notification().timestamp = dateWithTime.getTime();
        }
      });

      scope.$watch('notification()', function(notification) {
        if (notification) {
          let date = new Date(notification.timestamp);
          scope.date = date;
          scope.time = moment(date).format('HH:mm');
        }
      });

      scope.$watch('forceExpand() || mouseIn || clickExpanded', function(expanded) {
        scope.expanded = expanded;
      });

      scope.$watch('expanded', function(expanded) {
        if (expanded) {
          element.addClass('expanded');
        } else {
          element.removeClass('expanded');
        }
      });

      scope.done = function() {
        scope.clickExpanded = false;
      };

      scope.clickExpand = function() {
        if (!scope.forceExpand()) {
          scope.clickExpanded = true;
        }
      };

      // scope.mouseEnter = function() {
      //   scope.mouseIn = true;
      // };
      //
      // scope.mouseOut = function() {
      //   scope.mouseIn = false;
      // };

    }
  }
}

berthaNotification.$inject = [];
