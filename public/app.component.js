"use strict";

const cart = {

    template: `
<section class="meow">
<section class="cat">
<p class="fish">Your Shopping Cart</p>
<div class="hello" ng-repeat="item in $ctrl.cartItems track by $index">
<img ng-click="$ctrl.removeItem(item);" class="woof" src="icons-close.png">
<p>Id: {{ item.id }}</p>
<p>Product: {{ item.product }}</p>
<p>Quantity: {{ item.quantity }}</p>
<p>Price: {{ item.price }}</p>
</div>
</section>
</section>

    `,
    controller: ["CartService", function (CartService) {
        const vm = this;
        function handleResponse(response) {
            vm.cartItems = response.data;
        };
        CartService.getAllItems().then(handleResponse);

        vm.removeItem = function(item) {
            CartService.deleteItem(item).then(handleResponse)
        };
        
    }


    ]







}

angular.module("App").component("cart", cart)
