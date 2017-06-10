angular.module('app', []);

angular
    .module('app')
    .controller('appCtrl', AppCtrl);

AppCtrl.$inject = ['$scope', '$http'];

function AppCtrl($scope, $http) {
    var vm = this;

    vm.deviceStatus = '';
    vm.deviceInfo = {};

    getDevices();

    function getDevices() {
        $http.get('/devicesStatus').then(function (res) {
            vm.deviceStatus = res.data;
        });
    }

    vm.sendRequestToServer = function (device, val) {
        device.deviceStatus = val === 'ON' ? 'ON' : 'OFF';

        $http.post('/toggleBulb', device).then(function (res) {

        });
    };

    vm.createNewDevice = function () {
        $http.post('/createNewDevice', vm.deviceInfo).then(function (res) {
            alert('Device Added');
            getDevices();
        });
    }
}
