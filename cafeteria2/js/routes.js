angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('start', {
    url: '/page1',
    templateUrl: 'templates/start.html',
    controller: 'startCtrl'
  })

  .state('bebidas', {
    url: '/page2',
    templateUrl: 'templates/bebidas.html',
    controller: 'bebidasCtrl'
  })

  .state('bolleria', {
    url: '/page3',
    templateUrl: 'templates/bolleria.html',
    controller: 'bolleriaCtrl'
  })

  .state('tostadas', {
    url: '/page5',
    templateUrl: 'templates/tostadas.html',
    controller: 'tostadasCtrl'
  })

  .state('pasarelaPago', {
    url: '/page6',
    templateUrl: 'templates/pasarelaPago.html',
    controller: 'pasarelaPagoCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});