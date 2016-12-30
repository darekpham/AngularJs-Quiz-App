(function () {
    angular
        .module('turtleFacts')
        .controller('resultsCtrl', ResultsController);

        ResultsController.$inject = ['quizMetrics', 'dataService']

        function ResultsController (quizMetrics, dataService) {
            var vm = this;

            vm.quizMetrics = quizMetrics;
            vm.dataService = dataService;
            vm.getAnswerClass = getAnswerClass;
            vm.activeQuestion = 0;
            
            function getAnswerClass (index) {
                if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
                    return "bg-success";
                }else if(index === dataService.quizQuestions[vm.activeQuestion].selected){
                    return "bg-danger";
                }
            }
        }
})();