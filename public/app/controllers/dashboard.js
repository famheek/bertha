
const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];

export default class DashboardController {

  constructor($scope, $timeout) {
    function updateDate() {
      let now = new Date();
      $scope.dayOfWeek = days[now.getDay()];
      $scope.dayOfMonth = now.getDate();
      $scope.month = months[now.getMonth()];
      $scope.year = now.getFullYear();
      $timeout(updateDate, 1000 * 60 * 60); // every hour
    }
    updateDate();
  }

}

DashboardController.$inject = ['$scope', '$timeout'];
