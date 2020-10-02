describe("task4", function() {

    describe("поиск слова по шаблону", function() {
        
        function myTest(template, actual, expected) {
            it ("если шаблон равен:" + template + 
                ", ожидаемый результат: " + expected
                + "фактический результат: " + actual,
                function() {
                    assert.equal(actual, expected);
                });
        }
        let template = /JavaScript/g;
        let expected = "JavaScript";
        let actual = findWord(template);
        myTest(template, actual, expected)
    });
});