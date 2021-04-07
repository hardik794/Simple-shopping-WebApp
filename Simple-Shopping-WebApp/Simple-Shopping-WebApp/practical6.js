var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[]; 
				$scope.products = [
					{p_id: "1", p_name: "iphone 12 pro max", p_image: "1.png", p_price: 109000},
					{p_id: "2", p_name: "Fastrack Watch", p_image: "2.webp", p_price: 1500},
					{p_id: "3", p_name: "BoAt Rockerz 370", p_image: "3.png", p_price: 999},
					{p_id: "4", p_name: "Sundisk 64gb", p_image: "4.png", p_price: 500},
					{p_id: "5", p_name: "Canon DSLR", p_image: "5.png", p_price: 80000},
				]; 
 
				$scope.add_cart = function(product){ 
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price}); //pushes the chosen product into a new variable called carts when the add to cart button is clicked
					}	
				}
 
 
				$scope.total = 0; 
                $scope.gst = 0;
                $scope.netprice = 0;

				$scope.setTotals = function(cart){ 
					if(cart){ 
						$scope.total += cart.p_price; 
                        $scope.gst = ($scope.total*18)/100
                        $scope.netprice=$scope.total+$scope.gst
					}
				}
 
				$scope.remove_cart = function(cart){ 
					if(cart){ 
						$scope.carts.splice($scope.carts.indexOf(cart), 1); 
						$scope.total -= cart.p_price; 
                        $scope.gst = ($scope.total*18)/100
                        $scope.netprice=$scope.total+$scope.gst
                    }
				}
	});
