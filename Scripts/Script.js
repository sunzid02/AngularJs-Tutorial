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
              })
              .controller("HandlingEventsController", function ($scope) {
                var technologies = [
                  { name: "C#", likes:0, dislikes: 0},
                  { name: "ASP.NET", likes:0, dislikes: 0},
                  { name: "SQL Server", likes:0, dislikes: 0},
                  { name: "AngularJS", likes:0, dislikes: 0}
                ];

                $scope.technologies = technologies;

                $scope.incrementLikes = function (technology) {
                  technology.likes++;
                }

                $scope.incrementDisLikes = function (technology) {
                  technology.dislikes++;
                }
              })
              .controller("filterController", function($scope){
                var employees = [
                  { name:"Abdul", dateOfBirth:new Date("January 23, 1980"), gender:"Male", salary: 50879.88 },
                  { name:"Babul", dateOfBirth:new Date("November 23, 1990"), gender:"Male", salary: 40879.88 },
                  { name:"Chulbul", dateOfBirth:new Date("February 23, 1950"), gender:"Male", salary: 30879.88 },
                  { name:"Pandey", dateOfBirth:new Date("November 23, 1940"), gender:"Male", salary: 5079.88 },
                  { name:"Maya", dateOfBirth:new Date("November 23, 1930"), gender:"Female", salary: 5179.88 },
                ];

                $scope.employees = employees;
                $scope.rowLimit = 3;
              })
              .controller("SortingDataController", function($scope){
                var employees = [
                  { name:"Abdul", dateOfBirth:new Date("January 23, 1980"), gender:"Male", salary: 50879.88 },
                  { name:"Babul", dateOfBirth:new Date("November 23, 1990"), gender:"Male", salary: 40879.88 },
                  { name:"Chulbul", dateOfBirth:new Date("February 23, 1950"), gender:"Male", salary: 30879.88 },
                  { name:"Pandey", dateOfBirth:new Date("November 23, 1940"), gender:"Male", salary: 5079.88 },
                  { name:"Maya", dateOfBirth:new Date("November 23, 1930"), gender:"Female", salary: 5179.88 },
                ];

                $scope.employees = employees;
                $scope.sortColumn = "name";
              })

              .controller("sortRowsByTableHeaderController", function ($scope) {
                var employees = [
                    { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000 },
                    { name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000 },
                    { name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000 },
                    { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000 },
                    { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000 }
                ];

                $scope.employees = employees;
                $scope.sortColumn = "name";
                $scope.reverseSort = false;


                /*
                  This function will provide the sort capability,
                  it works like if your column adjust with ASC
                  after click that column it will change to desc order
                */
                $scope.sortData = function (column) {
                    if ($scope.sortColumn == column)
                    {
                      $scope.reverseSort = !$scope.reverseSort; //true or false..
                    }
                    else
                    {
                      $scope.reverseSort = false;
                    }
                    // or
                    // $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                    $scope.sortColumn = column;
                }

                $scope.getSortClass = function (column) {

                    if ($scope.sortColumn == column) {
                        return $scope.reverseSort // if the value is true we are going to set the data to desc order
                          ? 'arrow-down'
                          : 'arrow-up';
                    }

                    return '';
                }

              })

              .controller("SearchController", function ($scope) {
                var employeess = [
                    { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000 },
                    { name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000 },
                    { name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000 },
                    { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000 },
                    { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000 }
                ];

                $scope.employees = employeess;
                
              })
              
              .controller("FilterByMultiplePropertiesController", function ($scope) {
                var employees = [
                  { name: "Ben", gender: "Male", salary: 50000, city: "Dhaka"},
                  { name: "Has", gender: "Female", salary: 150000, city: "Raj"},
                  { name: "Kum", gender: "Male", salary: 2550000, city: "Com"},
                  { name: "Pro", gender: "Female", salary: 8950000, city: "Bari"},
                  { name: "Pur", gender: "Male", salary: 350000, city: "Syl"},
                ];

                $scope.employees = employees;

                $scope.search = function (item) {
                  //if we dont type anything in the search box
                  if ($scope.searchTextOpt2 == undefined) 
                  {
                    return true;
                  }
                  else
                  {
                    if (
                        item.name.toLowerCase().indexOf($scope.searchTextOpt2.toLowerCase()) != -1 
                        ||
                        item.city.toLowerCase().indexOf($scope.searchTextOpt2.toLowerCase()) != -1
                      ) 
                    {
                      return true;
                    }
                  }

                  return false; // no match found
                }
              });

          
