(function () {
    angular
        .module('coder-dojo-signup')
        .controller('FormController', FormController);

    FormController.$inject = [
        '$http',
        '$state'
    ];

    function FormController($http, $state) {
        var vm = this;

        vm.auth = $state.params.auth;
        vm.code = $state.params.code;
        vm.isBw = $state.params.code.indexOf('bw') >= 0;
        vm.spotsLeft = $state.params.spotsLeft;

        if (!vm.auth) {
            console.log('vm.auth not true');
            $state.go('register');
        }

        vm.minDate = new Date(1998, 9, 5);
        vm.maxDate = new Date(2008, 9, 5);

        vm.form = {
            ninjas: [
                {
                    firstName: '', lastName: '', birthday: new Date(2008, 9, 5), under12: false, activities: [
                    { name: 'Scratch', selected: false },
                    { name: 'Edison Robots', selected: false },
                    { name: 'LEGO Mindstorm Robots', selected: false },
                    { name: 'Website Development', selected: false },
                    { name: 'Other', selected: false }
                ]
                }
            ],
            dojo: vm.isBw ? 'Bankwest' : '',
            bwContact: { firstName: '', lastName: ''},
            parent: {
                firstName: '', lastName: '', email: '', phone: ''
            },
            photoPermission: false,
            comments: ''
        };

        vm.add = add;
        vm.remove = remove;
        vm.register = register;

        function add() {
            console.log('Spots', vm.spotsLeft);
            var ninja = {
                firstName: '', lastName: '', birthday: new Date(2008, 9, 5), under12: false, activities: [
                    { name: 'Scratch', selected: false },
                    { name: 'Edison Robots', selected: false },
                    { name: 'LEGO Mindstorm Robots', selected: false },
                    { name: 'Website Development', selected: false },
                    { name: 'Other', selected: false }
                ]
            };

            if (vm.form.ninjas.length >= vm.spotsLeft) {
                alert('Unfortunately there are only ' + vm.spotsLeft + ' spots left for this event. Therefore, you cannot register more than ' + vm.spotsLeft +
                    ' ninjas at this time. Please contact your local Coder Dojo champion if you have any questions');
            }
            else {
                vm.form.ninjas.push(ninja);
            }
        }

        function remove(ninja) {
            var index = vm.form.ninjas.indexOf(ninja);

            if (index >= 0) {
                vm.form.ninjas.splice(index, 1);
            }
        }

        function calcUnder12(ninja) {
            var is12 = new Date (2003, 9, 5);
            var diff = Math.abs(is12 - ninja.birthday);

            return diff < 0;
        }

        function register() {
            if (confirm('Is all the information correct? You will not be able to go back and edit it.')) {
                console.log(vm.form);

                for(var i = 0; i < vm.form.ninjas.length; i++) {
                    vm.form.ninjas[i].under12 = calcUnder12(vm.form.ninjas[i]);
                }

                var req = {
                    method: 'POST',
                    url: '/api/registerNinja',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    data: {form: vm.form, code: vm.code}
                };

                $http(req)
                    .then(success, error);

                function success(response) {
                    console.log('submit form success', response);
                    $state.go('accept');
                }

                function error(err) {
                    console.log('submit form err', err);
                    $state.go('error');
                }
            }
        }
    }
})();