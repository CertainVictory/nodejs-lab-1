"use strict";

function CartService($http) {
    const self = this;

    self.getAllItems = function () {
        return $http({
            method: "GET",
            url: "/cart-items"
        });
    }

    self.deleteItem = function(item) {
    
        return $http({
            method: "DELETE",
            url: `cart-items/${item.id}`
        })
    }


}


angular.module("App").service("CartService", CartService)

