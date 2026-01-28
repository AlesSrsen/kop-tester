(function (angular) {
    "use strict";


    var paaApp = angular.module('paaApp', []);

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Debounced MathJax typesetting to batch multiple elements together
    var mathjaxPendingElements = [];
    var mathjaxTypesetScheduled = false;

    function scheduleMathJaxTypeset(element) {
        mathjaxPendingElements.push(element);
        if (!mathjaxTypesetScheduled) {
            mathjaxTypesetScheduled = true;
            // Use setTimeout to batch all elements updated in the same digest cycle
            setTimeout(function () {
                var elements = mathjaxPendingElements;
                mathjaxPendingElements = [];
                mathjaxTypesetScheduled = false;

                // Find common parent to typeset all at once, or typeset individually if needed
                if (elements.length > 0) {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, elements]);
                }
            }, 0);
        }
    }

    paaApp.directive("mathjaxBind", function () {
        return {
            restrict: "A",
            scope: {
                text: "@mathjaxBind"
            },
            controller: ["$scope", "$element", "$attrs", function ($scope, $element, $attrs) {
                $scope.$watch('text', function (value) {
                    var $script = angular.element("<script type='math/tex'>")
                        .html(value == undefined ? "" : value);
                    $element.html("");
                    $element.append($script);
                    scheduleMathJaxTypeset($element[0]);
                });
            }]
        };
    });

    paaApp.directive('dynamic', function ($compile) {
        return {
            restrict: 'A',
            replace: true,
            link: function (scope, ele, attrs) {
                scope.$watch(attrs.dynamic, function (html) {
                    if (!html) {
                        ele.html('');
                        return;
                    }

                    // First render markdown using marked if available
                    if (window.marked) {
                        // Protect MathJax delimiters from markdown processing
                        var mathBlocks = [];
                        var inlineMath = [];

                        // Protect display math $$...$$
                        html = html.replace(/\$\$([^$]+)\$\$/g, function (match, content) {
                            mathBlocks.push(content);
                            return '%%MATHBLOCK' + (mathBlocks.length - 1) + '%%';
                        });

                        // Protect inline math $...$
                        html = html.replace(/\$([^$]+)\$/g, function (match, content) {
                            inlineMath.push(content);
                            return '%%INLINEMATH' + (inlineMath.length - 1) + '%%';
                        });

                        // Preserve multiple consecutive newlines (empty lines become placeholder)
                        html = html.replace(/\n\n+/g, function (match) {
                            // Each double+ newline becomes paragraph breaks
                            var count = match.length - 1; // number of line breaks to insert
                            var result = '';
                            for (var i = 0; i < count; i++) {
                                result += '%%BLANKLINE%%\n';
                            }
                            return result;
                        });

                        // Parse markdown with breaks enabled to preserve newlines
                        html = marked.parse(html, { breaks: true });

                        // Restore blank lines as <br> elements
                        html = html.replace(/%%BLANKLINE%%/g, '<br>');

                        // Restore MathJax delimiters with spans
                        html = html.replace(/%%MATHBLOCK(\d+)%%/g, function (match, idx) {
                            return '<span class="blue" mathjax-bind="' + mathBlocks[parseInt(idx)] + '"></span>';
                        });

                        html = html.replace(/%%INLINEMATH(\d+)%%/g, function (match, idx) {
                            return '<span class="red" mathjax-bind="' + inlineMath[parseInt(idx)] + '"></span>';
                        });
                    } else {
                        // Fallback to original behavior if marked is not available
                        html = html.replace(/\$\$([^$]+)\$\$/g, "<span class=\"blue\" mathjax-bind=\"$1\"></span>");
                        html = html.replace(/\$([^$]+)\$/g, "<span class=\"red\" mathjax-bind=\"$1\"></span>");
                    }

                    ele.html(html);
                    $compile(ele.contents())(scope);
                });
            }
        };
    });

    paaApp.controller('QuestionsController', ['$scope', function ($scope) {

        var currentQuestionIndex = 0;
        $scope.selection = [];
        $scope.userText = "";
        $scope.totalErrors = 0;
        $scope.totalOK = 0;
        var tmpQQ;

        var QUESTIONS;

        $scope.reset = function () {
            $scope.userText = "";
        };

        $scope.setQuestions = function (questions) {

            tmpQQ = questions;

            var fin = [];
            var iter = 1;
            $scope.question = [];
            $scope.textAnswer = "";

            $scope.questionText = questions.question;

            if (questions.note) {
                $scope.note = questions.note;
            } else {
                $scope.note = "";
            }

            // Handle AI-generated note
            if (questions.aiNote) {
                $scope.aiNote = questions.aiNote;
            } else {
                $scope.aiNote = "";
            }

            // Handle question image
            if (questions.image) {
                $scope.questionImage = questions.image;
            } else {
                $scope.questionImage = "";
            }

            angular.forEach(questions.answers, function (value, key) {

                fin.push({
                    text: value,
                    isCorrect: questions.correct[iter] === 1
                });

                iter++;
            });

            if (questions.answer) {
                $scope.textAnswer = questions.answer;
            }

            // Shuffle answers to randomize their order
            $scope.question = shuffleArray(fin);
            $scope.total = QUESTIONS.length;
        };


        $scope.solve = function (questions) {

            if ($scope.textAnswer) {
                $scope.ss = true;
                return;
            }

            var f = false;

            angular.forEach($scope.question, function (oo) {

                if ($scope.isCorrect(oo) === false) {
                    f = true;
                }

            });

            if (f === true) {
                $scope.totalErrors++;

                QUESTIONS.push(tmpQQ);
                QUESTIONS = shuffleArray(QUESTIONS);
            } else {
                $scope.totalOK++;
            }

            $scope.errorDeted = f;

            $scope.ss = true;

        };

        (function () {
            // Use activeQuestions set by question set selector, fallback to questions
            var questionsSource = window.activeQuestions || questions;
            QUESTIONS = shuffleArray(questionsSource.slice()); // Clone to avoid modifying original
            $scope.setQuestions(QUESTIONS.pop());
        })();


        $scope.nextOK = function () {
            $scope.totalOK++;
            $scope.next();
        };

        $scope.nextWrong = function () {
            QUESTIONS.push(tmpQQ);
            QUESTIONS = shuffleArray(QUESTIONS);

            $scope.totalErrors++;
            $scope.next();
        };


        $scope.next = function () {
            currentQuestionIndex++;
            $scope.questionText = "";
            $scope.note = "";
            $scope.aiNote = "";

            $scope.ss = false;
            $scope.selection = [];
            $scope.setQuestions(QUESTIONS.pop());
            $scope.reset();
        };

        $scope.isCorrect = function (que) {
            var isSelected = $scope.selection.indexOf(que) > -1;
            var shouldBechecked = que.isCorrect;

            if (isSelected == shouldBechecked) {
                return true;
            } else {
                return false;
            }
        };


        // toggle selection for a given answer by name
        $scope.toggleSelection = function toggleSelection(answer) {
            var idx = $scope.selection.indexOf(answer);

            // is currently selected
            if (idx > -1) {
                $scope.selection.splice(idx, 1);
            }

            // is newly selected
            else {
                $scope.selection.push(answer);
            }
        };

    }]);


})(angular);

(function () {


})();
