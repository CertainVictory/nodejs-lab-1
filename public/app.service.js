"use strict";

function CartService($http) {
    const self = this;

    self.getAllItems = function () {
        return $http({
            method: "GET",
            url: "/cart-items"
        });
    }

    self.addItem = function (newItem) {
        return $http({
            method: "POST",
            url: "/cart-items",
            data: { ...newItem, price: Number(newItem.price), quantity: Number(newItem.quantity)}
        });
    }


    self.deleteItem = function(id) {
    
        return $http({
            method: "DELETE",
            url: `cart-items/${id}`
        })
    }

    self.updateQty = function(item, newQty) {
        console.log(item, newQty)
    return $http({
        method: "PUT",
        url: `cart-items/${item.id}`,
        data: { quantity: newQty }

    })
}
}


angular.module("App").service("CartService", CartService)

