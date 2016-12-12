//////////////////////////////////////////////////////////////////////////////////////
// Developed by : Sandeep Kumbhar (Software Engineer) | sandeepkumbhar007@gmail.com //
//////////////////////////////////////////////////////////////////////////////////////
function CartForm($scope) {
  $scope.invoice = {
    items: [{
      qty: 2,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      cost: 12.99
    }]
  },

  $scope.addItem = function() {
    $scope.invoice.items.push({
      qty: Math.floor((Math.random()*10)+1),
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      cost: ((Math.random()*100)+1) // 45.99
    });
  },

  $scope.removeItem = function(index) {
    $scope.invoice.items.splice(index, 1);
  },

  $scope.total = function() {
    var total = 0;
    angular.forEach($scope.invoice.items, function(item) {
      total += item.qty * item.cost;
    })
    return total;
  },

  $scope.tax = function() {
    var tax = 0;
    tax = (($scope.total()*5)/100);
    return tax;
  },

  $scope.shipping = function() {
    var shipping = 15;
    return shipping;
  },

  $scope.grandtotal = function() {
    var total = 0;
    total = $scope.total() + $scope.tax() + $scope.shipping();
    return total;
  },

  $scope.getRandomPrice = function(){
    return Math.floor((Math.random()*6)+1);
  }
};