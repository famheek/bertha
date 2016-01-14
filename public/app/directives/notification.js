import notificationTmpl from './notification.html!';
import '../../style/notification.css!';

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
