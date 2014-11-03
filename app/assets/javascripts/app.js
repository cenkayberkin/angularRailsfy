//=require_self
//=require app.js
//=require products.js

(function(){
  var app = angular.module('gemStore', ['store-directives','ngCookies','ngRoute']);

  app.config(['$httpProvider', function ($httpProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common.Accept = 'application/json';
  }]);

  app.controller('StoreController', ['$scope','$http',function($scope, $http){
    var store = this;
    store.products = [];

    $scope.index = function( ){
      $http.get('products/index')
          .success(function(data){
            store.products = data.products;
          })
          .error(function(data, status){
            $scope.errors.push(data);
            console.log(data);
            console.log(status);
          });
    };

    $scope.create = function(sProduct){
      var sendProduct = { product: sProduct }
      $http.post('/products/create', sendProduct)
        .success(function(data){
          store.products.push(data);
        })
        .error(function(data,status){
          $scope.errors.push(data);
          console.log(data);
          console.log(status);
        });
    };

    $scope.update = function(sProduct){
      $http({
        method: 'PATCH',
        url: '/products/' + sProduct.id,
        data: sProduct
      })
      .success(function(){
        note.editing = false;
      })
      .error(function(){
        console.log("couldnt update");
      });
    };

    $scope.destroy = function(sProduct){
      $http({
        method: 'DELETE',
        url: '/products/' + sProduct.id
      })
      .success(function(){
        store.products.splice(store.products.indexOf(sProduct),1);
      })
      .error(function(){
        $scope.errors.push(data);
        console.log(data);
        console.log(status);
      })
    };

  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });

  app.config(['$routeProvider',function($routeProvider){
    $routeProvider
      .when('/products',{
        contoller: 'StoreController',
        templateUrl: 'customDirectives/products_view.html'
      })
      .when('/users',{
        controller: 'UsersCtrl',
        templateUrl: 'customDirectives/users_view.html'
      })
      .otherwise({
        redirectTo: '/products'
      });
  }]);

  app.run(['$rootScope','$cookies','$http', function($rootScope, $cookies,$http){
    $rootScope.isLoggedIn = function(){
      var currentUser = $cookies.c_user;
      return typeof(currentUser) !== 'undefined' && currentUser !== '';
    };
    $rootScope.currentUser = function(){
      console.log($cookies.c_user);
      return $cookies.c_user;
    };
    $rootScope.logOut = function(){
      $http({
        method:'DELETE',
        url: '/users/sign_out'
      })
      .success(function(){
        $cookies.c_user = '';
      })
      .error(function(){
        console.log('could not log out');
      });
    };
  }]);

  app.controller('UsersCtrl', ['$scope','$http','$cookies','$location',function($scope, $http, $cookies,$location){
    $scope.create = function(user){
      $http({
        method: 'POST',
        url: '/users',
        data: { user: user }
      })
      .success(function(data){
        console.log(data);
        $cookies.c_user = data['email'];
        $location.path('/notes');
        console.log('created users');
      })
      .error(function(data,status){
        console.log(data);
        console.log(status);
      });
    };

    $scope.signIn = function(user){
      $http({
        method: 'POST',
        url: '/users/sign_in',
        data: { user: user}
      })
      .success(function(data){
        $cookies.c_user = data['email'];
        $location.path('/path');
      })
      .error(function(data,status){
        console.log(data);
        console.log(statuss);

      });
    };

  }]);
})();


