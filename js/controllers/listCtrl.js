(function () {

    angular
        .module('turtleFacts')
        .controller('listCtrl', ListController);

        ListController.$inject = ['quizMetrics', 'dataService'];

        function ListController (quizMetrics, dataService) {
            var vm = this;

            vm.quizMetrics = quizMetrics;
            vm.data = dataService.turtlesData;
            vm.activeTurtle = {};
            vm.changeActiveTurtle = changeActiveTurtle;
            vm.activateQuiz = activateQuiz;
            vm.search = '';

            function changeActiveTurtle (index) {
                vm.activeTurtle = index;
            }

            function activateQuiz () {
                quizMetrics.changeState(true);
            }
        }

})();