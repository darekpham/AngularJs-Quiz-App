(function () {
    angular
        .module('turtleFacts')
        .controller('resultsCtrl', ResultsController);

        ResultsController.$inject = ['quizMetrics', 'dataService']

        function ResultsController (quizMetrics, dataService) {
            var vm = this;

            vm.quizMetrics = quizMetrics;
            vm.dataService = dataService;
        }
})();