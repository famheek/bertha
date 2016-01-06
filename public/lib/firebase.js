
import Firebase from 'firebase';

const firebaseURL = 'http://bertha.firebaseio.com/';

export default class FirebaseUtils {
	constructor($firebaseObject) {
		this.loadFirebaseObject = function(path) {
			var eventRef = new Firebase(firebaseURL + path);
			var eventObject = $firebaseObject(eventRef);
			return eventObject;
		}
	}
}

FirebaseUtils.$inject = ['$firebaseObject'];
