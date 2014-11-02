//=require_self
//=require app.js
//=require products.js


(function(){
  var app = angular.module('gemStore', ['store-directives']);

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
            console.log(data);
            store.products = data.products;
          })
          .error(function(data, status){
            $scope.errors.push(data);
            console.log(data);
            console.log(status);
          });
    };

  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });


})();
