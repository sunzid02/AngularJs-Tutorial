

// //create module
// var myApp = angular.module("myModule", []);
//
//
//
//
// // controller
// myApp.controller("myController", function ($scope) {
//   var employee = {
//     firstName: "Karim",
//     lastName: "ben"
//   };
//   $scope.employee = employee;
// });


//create module, create controller and registered it with method chaining
var myApp = angular
              .module("myModule",[])
              .controller("myController", function ($scope) {
                var employee = {
                  firstName: "Cristiano7",
                  lastName: "ben"
                };
                var country = {
                  name: "Bangladesh",
                  capital: "Dhaka",
                  flag: "Images/bd-flag.jpg"
                };

                $scope.employee = employee;
                $scope.country = country;
              })
              .controller("myController2",function ($scope) {
                var menz = [
                  {firstName: "fet", lastName: "fet"},
                  {firstName: "fet2", lastName: "fet2"},
                  {firstName: "fet3", lastName: "fet3"}
                ];

                $scope.menz = menz;
              });
