import angular from 'angular';
import angularMaterial from 'angular-material';
import angularRoute from 'angular-route';
import angularMessages from 'angular-messages';
import angularFire from 'angularfire';


import moment from 'moment';

import DashboardController from './controllers/dashboard';
import WelcomeController from './controllers/welcome';
import AdminController from './controllers/admin';

import DashboardDirective from './directives/dashboard';
import NotificationDirective from './directives/notification';
import ImportantMarkupDirective from './directives/important-markup';

import dashboardTmpl from '../templates/dashboard.html!';
import adminTmpl from '../templates/admin.html!';
import welcomeTmpl from '../templates/welcome.html!';

import ScheduledNotificationsFilter from './filters/scheduled-notifications';
import ActiveNotificationsFilter from './filters/active-notifications';

import 'font-awesome/css/font-awesome.min.css!';
import 'angular-material/angular-material.css!';

import '../style/app.css!';
import '../style/welcome.css!';
import '../style/dashboard.css!';
import '../style/admin.css!';

export default angular.module('App', ['ngMaterial', 'ngRoute', 'ngMessages', 'firebase'])
  .controller('AdminController', AdminController)
  .controller('WelcomeController', WelcomeController)
  .controller('DashboardController', DashboardController)

  .directive('berthaDashboard', DashboardDirective)
  .directive('berthaNotification', NotificationDirective)
  .directive('importantMarkup', ImportantMarkupDirective)

  .filter('activeNotifications', ActiveNotificationsFilter)
  .filter('scheduledNotifications', ScheduledNotificationsFilter)

  .config(['$mdDateLocaleProvider', function($mdDateLocaleProvider) {
    // Example of a French localization.
    $mdDateLocaleProvider.months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
    $mdDateLocaleProvider.shortMonths = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'okt', 'nov', 'dec'];
    $mdDateLocaleProvider.days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    $mdDateLocaleProvider.shortDays = ['zon', 'man', 'din', 'woe', 'don', 'vri', 'zat'];
    // Can change week display to start on Monday.
    $mdDateLocaleProvider.firstDayOfWeek = 0;
    $mdDateLocaleProvider.parseDate = function(dateString) {
      var m = moment(dateString, 'L', true);
      return m.isValid() ? m.toDate() : new Date(NaN);
    };
    $mdDateLocaleProvider.formatDate = function(date) {
      return moment(date).format('DD/MM/YYYY');
    };
    $mdDateLocaleProvider.monthHeaderFormatter = function(date) {
      return $mdDateLocaleProvider.shortMonths[date.getMonth()] + ' ' + date.getFullYear();
    };
    // In addition to date display, date components also need localized messages
    // for aria-labels for screen-reader users.
    $mdDateLocaleProvider.weekNumberFormatter = function(weekNumber) {
      return 'Semaine ' + weekNumber;
    };
    $mdDateLocaleProvider.msgCalendar = 'Calender';
    $mdDateLocaleProvider.msgOpenCalendar = 'Open calander';
  }])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/:id/dashboard', {
        template: dashboardTmpl,
        controller: 'DashboardController'
      })
      .when('/:id/admin', {
        template: adminTmpl,
        controller: 'AdminController'
      })
      .otherwise({
        template: welcomeTmpl,
        controller: 'WelcomeController'
      });

    $locationProvider.html5Mode(false);
  }]);
