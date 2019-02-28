"use strict";

const cart = {

    templateUrl: `comp.html`,
    controller: ["CartService", function (CartService) {
        const vm = this;
        // let newQuantity = null;
        function handleResponse(response) {
            vm.cartItems = response.data;

        };
        vm.increaseQty = function (item, newQty) {
            CartService.updateQty(item, newQty).then(handleResponse)
        }
        CartService.getAllItems().then(handleResponse);
        vm.addItem = function (newItem) {
            CartService.addItem(newItem).then(handleResponse)
        };
        vm.removeItem = function (item) {
            CartService.deleteItem(item).then(handleResponse)
        };

    }


    ]







}

angular.module("App").component("cart", cart)
