'use strict';


if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

angular.module('landing', ['ngCookies','ngResource','ngSanitize','ui.router','app.controllers', 'app.services', 'app.filters', 'app.directives'])
.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

    }
])
.config(function($locationProvider,$stateProvider, $urlRouterProvider){
      //$locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state("index", {
          url: "/",
          views: {
            'view.player': {
              templateUrl: 'views/main.html',
              controller:'MainCtrl'

            },
            'view.promote': {
              templateUrl: 'views/promote.html',

              controller:'PromoteCtrl'
              
            },
            'view.appGroup': {
              templateUrl: 'views/app_group.html',

              controller:'AppGroupCtrl'
              
            }
          }
        })
        .state('index.episode', {
          url: '/:episodeId',
          views: {
            'view.player': {
              templateUrl: 'views/main.html',
              controller:'MainCtrl'

            },
            'view.promate': {
              templateUrl: 'views/promote.html',

              controller:'PromoteCtrl'
              
            },
            'view.appGroup': {
              templateUrl: 'views/app_group.html',

              controller:'AppGroupCtrl'
              
            }
          }
        })

        .state('testb', {
          url: '/awert',
          templateUrl: 'views/main.html',
        });
    }
  );




angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.filters', []);
angular.module('app.directives', []);






