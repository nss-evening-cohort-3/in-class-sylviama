var app = angular.module("BasicsOfForms", []);

app.controller("FormCtrl", function ($scope, $http) {

    $scope.formSubmit = function (event) {
        //way 1
        //var form = $("myform").serializeArray();
        //console.log(JSON.stringify(user));

        //way 3
        $scope.user = {
            email: "",
            password: "",
            passwordconfirmation:""
        }
        $scope.user.email = $("#myform>input[type=text]").val();
        $scope.user.password = $("#myform>input[type=password]").val();
        $scope.user.passwordConfirmation = $("#myform>input[type=passwordConfirmation]").val();

        //way 2
        //$http({
        //    method: "POST",
        //    url: "/api/AngularApi",
        //    data:user
        //}).then(function (response) {
        //    console.log("Post successful")
        //})

        event.preventDefault();
    }
})