/**
 * Created by Stasy on 21-Jan-17.
 */

angular.module ('Register')
    .controller ('NewMemberCtrl', function ($scope, $stateParams, $state) {


        $scope.UpdateMember = function () {
            $state.go ("NewMember");
        };

    });