import dashboardTmpl from './dashboard.html!';

const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];


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
        scope.dayOfWeek = days[date.getDay()];
        scope.dayOfMonth = date.getDate();
        scope.month = months[date.getMonth()];
        scope.year = date.getFullYear();
      })

    }
  }
}

berthaDashboard.$inject = []
