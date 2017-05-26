/*
    Author: Xavid Ramirez
    Email: xavid.ramirez01@utrgv.edu
    Desc: clothing size conversion to multiple country standards
    date: 05/25/2017
*/
'use strict';

/**
 * @ngdoc function
 * @name todoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAppApp
 */
angular.module('todoAppApp').controller('MainCtrl', function ($scope) {

    $scope.Value = " ";
    
    // Female Clothes conversion values
    $scope.FemaleClothes = {
        US : ["(0-2)", "4", "6", "8", "10", "12", "14", "16", "18"],
        UK : ["4-6", "8", "10", "12", "14", "16", "18", "20", "22"],
        EU : ["32-34", "36", "38", "40", "42", "44", "46", "48", "50"],
        CH : ["5", "7", "9", "11", "13", "15", "17", "19", "21"],
        JP : ["4-6", "8", "10", "12", "14", "16", "18", "20", "22"],
        AU : ["84-86", "NA_0", "88-90", "92-96", "NA_1", "98-102", "NA_2", "106-110", "NA_3"]
    };
    
    // female shoe size conversion factors
    $scope.WomenShoes = {
        US : [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 12, 13, 14, 15.5],
        UK : [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 9.5, 10.5, 11.5, 13],
        EU : [35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40, 41, 41.5, 42, 43, 44.5, 46, 47, 49],
        CH : [35.5, 36, 37, 37.5, 38, 39, 39.5, 40, 41, 41.5, 42, 43, 44.5, 46, 47, 49],
        JP : [21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 27, 28, 29, 30, 31],
        AU : [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10.5, 11.5, 12.5, 14]
    };
    
    // women bra conversion factors
    $scope.WomenBras = {
        US : ["30A", "30B", "30C", "30DD", "30DDD", "32A", "32B", "32C", "32D", "32DD", "32DDD", "32F", "32G", "34A", "34B", "34C", "34D", "34DD", "34DDD", "34F", "34G", "36A", "36B", "36C", "36D", "36DD", "36DDD", "36F", "36G", "38B", "38C", "38D", "38DD", "38DDD", "38F", "38G", "40B", "40C", "40D", "40DD", "40DDD", "40F", "40G", "42B", "42C", "42D", "42DD", "42DDD", "42F", "42G", "44B", "44C", "44D", "44DDD", "44F", "44G"],
        UK : ["30A", "30B", "30C", "30DD", "30E", "32A", "32B", "32C", "32D", "32DD", "32E", "32F", "32G", "34A", "34B", "34C", "34D", "34DD", "34E", "34F", "34G", "36A", "36B", "36C", "36D", "36DD", "36E", "36F", "36G", "38B", "38C", "38D", "38DD", "38E", "38F", "38G", "40B", "40C", "40D", "40DD", "40E", "40F", "40G", "42B", "42C", "42D", "42DD", "42E", "42F", "42G", "44B", "44C", "44D", "44E", "44F", "44G"],
        EU : ["65B", "65C", "65D", "65E", "65F", "65G", "70B", "70C", "70D", "70E", "70F", "70G", "70H", "70I", "75B", "75C", "75D", "75E", "75F", "75G", "75H", "75I", "80B", "80C", "80D", "80E", "80F", "80G", "80H", "80I", "85C", "85D", "85E", "85F", "85G", "85H", "85I", "90C", "90D", "90E", "90F", "90G", "90H", "90I", "95C", "95D", "95E", "95F", "95G", "95H", "95I", "100C", "100D", "100E", "100F", "100G", "100H", "100I"],
        CH : ["65B", "65C", "65D", "65E", "65F", "65G", "70B", "70C", "70D", "70E", "70F", "70G", "70H", "70I", "75B", "75C", "75D", "75E", "75F", "75G", "75H", "75I", "80B", "80C", "80D", "80E", "80F", "80G", "80H", "80I", "85C", "85D", "85E", "85F", "85G", "85H", "85I", "90C", "90D", "90E", "90F", "90G", "90H", "90I", "95C", "95D", "95E", "95F", "95G", "95H", "95I", "100C", "100D", "100E", "100F", "100G", "100H", "100I"],
        JP : ["65B", "65C", "65D", "65E", "65F", "65G", "70B", "70C", "70D", "70E", "70F", "70G", "70H", "70I", "75B", "75C", "75D", "75E", "75F", "75G", "75H", "75I", "80B", "80C", "80D", "80E", "80F", "80G", "80H", "80I", "85C", "85D", "85E", "85F", "85G", "85H", "85I", "90C", "90D", "90E", "90F", "90G", "90H", "90I", "95C", "95D", "95E", "95F", "95G", "95H", "95I", "100C", "100D", "100E", "100F", "100G", "100H", "100I"],
        AU : ["8A", "8B", "8C", "8D", "8DD", "8E", "10A", "10B", "10C", "10D", "10DD", "10E", "10F", "10G", "12A", "12B", "12C", "12D", "12DD", "12E", "12F", "12G", "14A", "14B", "14C", "14D", "14DD", "14E", "14F", "14G", "16B", "16C", "16D", "16DD", "16E", "16F", "16G", "18B", "18C", "18D", "18DD", "18E", "18F", "18G", "20B", "20C", "20D", "20DD", "20E", "20F", "20G", "22B", "22C", "22D", "22DD", "22E", "22F", "22G"]
    };
    
    // Male shoes conversion factors
    $scope.MaleShoes = {
        US : ["6", "6.5", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "14.5", "15.5", "16.5"],
        UK : ["5.5", "6", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "15", "16"],
        EU : ["38.5", "39", "40", "41", "42", "43", "43.5", "44", "44.5", "45", "45.5", "46", "46.5", "47", "47.5", "48.5", "49", "50", "51"],
        CH : ["39.5", "41", "NA_0", "42", "43", "43.5", "44", "44.5", "45", "46", "NA_1", "47", "47.5", "48", "NA_2", "NA_3", "NA_4", "NA_5", "NA_6"],
        JP : ["24.5", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30", "30.5", "31", "31.5", "32", "32.5", "33", "34", "35"],
        AU : ["5.5", "6", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "15", "16"]
    };
    
    $scope.MaleTops = {
        US : ["NA_0", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"],
        UK : ["NA_0", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "NA_1"],
        EU : ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "NA_0"],
        CH : ["NA_0", "NA_1", "S", "M", "L", "XL", "NA_2", "NA_3", "NA_4"],
        JP : ["NA_0", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "NA_1"],
        AU : ["NA_0", "NA_1", "S", "M", "L", "XL", "XXL", "XXXL", "NA_2"]
    };
    
    $scope.MalePants = {
        US : ["29", "30-31", "32-33", "34-35", "36-37", "38-39", "40-41", "42-43"],
        UK : ["29", "30-31", "32-33", "34-35", "36-37", "38-39", "40-41", "42-43"],
        EU : ["NA_0", "NA_1", "NA_2", "44", "46", "48", "50", "52"],
        CH : ["37", "28", "29", "30", "31", "32", "34", "36"],
        JP : ["NA_0", "NA_1", "NA_2", "0", "1", "2", "3", "4"],
        AU : ["29", "30-31", "32-33", "34-35", "36-37", "38-39", "40-41", "42-43"]
    };
    
    $scope.MaleShirts = {
        US : [14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5],
        UK : [14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5],
        EU : [36, 37, 38, 39, 41, 42, 43, 44],
        CH : [0, 37, 38, 39, 41, 42, 43, 44],
        JP : [87, 91, 97, 102, 107, 112, 117, 122],
        AU : [36, 37, 38, 39, 40, 41, 42, 43]
    };

    $scope.removeBlank = function(item) {
        if (item.indexOf("NA_") < 0){
            return item;
        }
    };
    
    // Male Conversion Functions
    $scope.MaleShoesConversion = function () {
        
        return $scope.fromCountry + " Shoes Size: " + $scope.MaleShoes[$scope.fromCountry][$scope.inputSize];
    };
    
    $scope.MaleShirtConversion = function () {
         return $scope.fromCountry + " Shirts Size: " + $scope.MaleShirts[$scope.fromCountry][$scope.inputSize];
    };
    
    $scope.MaleTopsConversion = function () {
         return $scope.fromCountry + " Top Size: " + $scope.MaleTops[$scope.fromCountry][$scope.inputSize];
    };
    
    $scope.MalePantsConversion = function () {
         return $scope.fromCountry + " Pants Size: " + $scope.MalePants[$scope.fromCountry][$scope.inputSize];
    };
    
    // Female conversion functions
    $scope.FemaleShoesConversion = function () {
         return $scope.fromCountry + " Shoes Size: " + $scope.WomenShoes[$scope.fromCountry][$scope.inputSize];
    };
    
    $scope.FemaleClothesConversion = function () {
        return $scope.fromCountry + " Clothes Size: " + $scope.FemaleClothes[$scope.fromCountry][$scope.inputSize];
    };
    
    $scope.FemaleBrasConversion = function () {
         return $scope.fromCountry + " Bras Size: " + $scope.WomenBras[$scope.fromCountry][$scope.inputSize];
    };
    
    $scope.processForm = function () {
        
        if($scope.genderType === 'isMale') {
            if($scope.maleType === 'isMenShoes') {
                $scope.Value = $scope.MaleShoesConversion();
            }else if ($scope.maleType === 'isMenPants') {
                $scope.Value = $scope.MalePantsConversion();
            }else if ($scope.maleType === 'isMenShirts') {
                $scope.Value = $scope.MaleShirtConversion();
            } else if ($scope.maleType === 'isMenTops') {
                $scope.Value = $scope.MaleTopsConversion();
            }
        }else if ($scope.genderType === 'isFemale') {
            if ($scope.femaleType === 'isWomenShoes') {
                $scope.Value = $scope.FemaleShoesConversion();
            } else if ($scope.femaleType === 'isWomenClothes') {
                $scope.Value = $scope.FemaleClothesConversion();
            } else if ($scope.femaleType === 'isWomenBras') {
                $scope.Value = $scope.FemaleBrasConversion();
            }
        }
    };
    
});