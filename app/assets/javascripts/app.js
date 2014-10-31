//=require_self
//=require app.js
//=require products.js


(function(){
  var app = angular.module('gemStore', ['store-directives']);

  app.config(['$httpProvider', function ($httpProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common.Accept = 'application/json';
  }]);

  app.controller('StoreController', ['$http',function($http){
    var store = this;
    store.products = [];
    $http.get('products/index').success(function(data){
      store.products = data.products;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });


})();
