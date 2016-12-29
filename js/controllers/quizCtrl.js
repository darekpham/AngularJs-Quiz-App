(function() {
    
    angular
        .module('turtleFacts')
        .controller('quizCtrl', QuizController);

        QuizController.$inject = ['quizMetrics', 'dataService']

        function QuizController (quizMetrics, dataService) {
            var vm = this;

            vm.quizMetrics = quizMetrics;
        }


})();