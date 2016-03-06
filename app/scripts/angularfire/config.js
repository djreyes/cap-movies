angular.module('firebase.config', [])
  .constant('FBURL', 'https://cap-movies.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
