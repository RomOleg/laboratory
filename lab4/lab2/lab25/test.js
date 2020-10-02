describe("task5", function() {

    describe("проверка самого длинной числовой последовательности", function() {
        /**
         * 
         * @param {String} actual - фактический результат
         * @param {String} expected - ожидаемый результат
         */
        function myTest(actual, expected) {
            it ("ожидаемый результат: " + expected
                + " фактический результат: " + actual,
                function() {
                    assert.equal(actual, expected);
                });
        }
        myTest(task5("fdjdf333ffd 3 fdf 55"), "333");
        myTest(task5("fdjdf333ffd 366666 fdf 55"), "366666");
        myTest(task5("fdjdf333ffd 3 fdf 55"), "55");
        myTest(task5("fdjdf35dfdffd 3 fdf 55"), "55");
        myTest(task5("123 54 5"), "123");
        myTest(task5("fdjdf333ffd 3 fdf 55"), "3");
        myTest(task5("333fjdf fdj fej  dkfjsd"), "333");
    });
});