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


})();
