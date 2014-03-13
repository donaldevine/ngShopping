function CartController ($scope, $location) {
    $scope.bill = {};

    $scope.items = [
        {title: 'Widgets', quantity: 8, price: 3.95},
        {title: 'More Stuff', quantity: 15, price: 58.88},
        {title: 'Chips', quantity: 8, price: 2.55}
    ];

    $scope.remove = function(index){
        $scope.items.splice(index, 1);
    }

    $scope.totalCart = function () {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }

        return total;
    }

    $scope.subTotal = function(){
        return $scope.totalCart() - $scope.bill.discount;
    }

    function calculateDiscount(newValue, oldValue, scope)
    {
        scope.bill.discount = newValue > 100 ? 10 : 0;
    }

    $scope.$watch($scope.totalCart, calculateDiscount);

}
