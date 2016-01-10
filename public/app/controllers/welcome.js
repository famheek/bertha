import {authEmailUser, createEmailUser, authFacebookUser} from '../../lib/firebase';
import overviewController from '../dialogs/overviewDialog';

export default class WelcomeController {

  constructor($scope, $location, $mdDialog) {

    $scope.authFacebookUser = function() {
      authFacebookUser(showOverviewDialog);
    }

    $scope.authEmailUser = function(email, password) {
      authEmailUser(email, password);
    }

    $scope.createEmailUser = function(email, password) {
      createEmailUser(email, password);
    }

    // $scope.linkToPage = function(path) {
    //   $location.path(path);
    // }

  function showOverviewDialog() {
    $mdDialog.show({
      controller: overviewController,
      templateUrl: 'app/dialogs/overviewDialog.html',
      parent: angular.element(document.body)
      //fullscreen: useFullScreen
    });
  }

 }

}

WelcomeController.$inject = ['$scope', '$location', '$mdDialog'];
