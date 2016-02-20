import {createEmailUser} from '../../lib/firebase';

export default function overviewController($scope, $mdDialog) {

	$scope.cancel = function() {
		$mdDialog.cancel();
	}

	$scope.signUp = function(email, password) {
		$scope.errorMessage = false;
		createEmailUser(email, password, function(error) {
			if(error) {
				$scope.$apply(function() {
					$scope.errorMessage = true;
				});
			} else {
				$mdDialog.hide(email);
			}
		});
	}

}

overviewController.$inject = ['$scope', '$mdDialog'];
