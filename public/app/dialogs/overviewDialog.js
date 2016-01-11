import {findOwnedDashboards, findDashboardsByOwner, addDashboard} from '../../lib/firebase';

export default function overviewController($scope, $location, $mdDialog) {

	$scope.addDashboard = function() {
		addDashboard();
	}

	$scope.openAdmin = function() {
		$location.path('/' + $scope.ownedDashboards[0] + '/admin');
		$mdDialog.hide();
	}


	$scope.openDashboard = function() {
		$location.path('/' + $scope.ownedDashboards[0] + '/dashboard');
		$mdDialog.hide();
	}

	findOwnedDashboards().on("child_added", function(snapshot) {
  		$scope.ownedDashboards.push(snapshot.key());	
	});

	$scope.ownedDashboards = [];

}

overviewController.$inject = ['$scope', '$location', '$mdDialog'];