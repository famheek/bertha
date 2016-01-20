import angular from 'angular';
import mainModule from './main';

import {schedule} from '../lib/timer';

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainModule.name]);
});

function scheduleReload() {
  let reloadDate = new Date();
  reloadDate.setMilliseconds(1);
  reloadDate.setHours(0);
  reloadDate.setMinutes(0);

  reloadDate.setDate(reloadDate.getDate() + 1);

  schedule(reloadDate).then(() => location.reload());
}

scheduleReload();
