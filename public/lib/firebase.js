import Firebase from 'firebase';

const firebaseEndpoint = 'http://bertha.firebaseio.com/';
const root = new Firebase(firebaseEndpoint);
const dashboards = root.child('dashboards');
const users = root.child('users');

export function addDashboard(onComplete) {
	return dashboards.push().set({
		owner: root.getAuth().uid,
		settings: {
			textToSpeech: {
				time: {
					enabled: false,
					repeatMode: '1h'
				},
				notifications: {
					enabled: false,
					repeatMode: '1h'
				}
			}
		}}, onComplete());
}

export function findOwnedDashboards() {
	if (root.getAuth() == null) {
		throw new Error('Not authenticated');
	}
	return findDashboardsByOwner(root.getAuth().uid);
}

export function findDashboardsByOwner(ownerId) {
	return dashboards.orderByChild("owner").equalTo(ownerId);
}

export function getDashboard(dashboardId) {
	return dashboards.child(dashboardId);
}

export function authEmailUser(email, password, functionOnComplete) {
	root.authWithPassword({
		email: email,
		password: password
	}, function(error, authData){
		if(functionOnComplete) {
			functionOnComplete(error);
		}
	});
}

export function createEmailUser(email, password, functionOnComplete) {
	root.createUser({
		email: email,
		password: password
	}, function(error, authData) {
		if(functionOnComplete) {
			functionOnComplete(error);
		}
	});
}

export function authFacebookUser(functionOnComplete) {
	root.authWithOAuthPopup("facebook", function(error, authData) {
		if(functionOnComplete) {
			functionOnComplete(error);
		}
	});
}

export function getAuth() {
	if(root.getAuth()) {
		return true;
	} else {
		return false;
	}
}
