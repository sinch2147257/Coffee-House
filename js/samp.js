var Myemp = angular.module("Myemp",[])
.filter("myfilter",function()
{
    return function(input,option)
    {
        if(isNaN(option)||option=="")
        {
            return input;
        }
        else{
            return input.substring(0,option);
        }
       
    }
})
.controller("empctrl", function($scope,$http)
    {
        $http.get('https://sinch2147257.github.io/lab8_json/data.json')
        .success(function(response)
        {
            $scope.names = response.records;
            
        });
        $scope.rowlimit = 8;
    });

    // //https://sinch2147257.github.io/lab8_json/product.json