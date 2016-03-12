angular.module('thunder.services', [])
.factory('User', function() {
  var o = {
    favorites: []
  }

  o.addProductToFavorites = function(product) {
    if(!product) return false;

    o.favorites.unshift(product);
  }

  o.removeProductFromFavorites = function(product, index) {
    if(!product) return false;

    o.favorites.splice(index, 1);
  }
  return o;
});
