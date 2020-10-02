describe("task1", function() {

    describe("если выборка идет из строки, которая имеет более 1 слова", function() {
  
        function makeTest(actual) {
            let expected = 'процесс, создания';
            it("фактический результат: "+actual+ " --- ожидаемый результат: " + expected, function() {
                assert.equal(actual, expected);
            });
        }
        
      let line = "Программи́рование — процесс создания " +
        "компьютерных программ. По выражению одного из " +
        "основателей языков программирования Никлауса Вирта " +
        "«Программы = алгоритмы + структуры данных». " +
        "Программирование основывается на использовании языков " +
        "программирования";
        let actual = '';
        task1(line).forEach(element => {
            actual = `${element[0]}, ${element[1]}`;
        });
        makeTest(actual);
    });

    describe("если выборка идет из строки соостоящей менее чем из 2 слов", function() {
        let line = `слово`;
        let actual = '';
        task1(line).forEach(element => {
            actual = `${element[0]}, ${element[1]}`;
        });
        let expected = '';
        it ('при выборке из одно слова результат будет пустая строка',
        function() {
            assert.equal(actual, expected);
        });
    });

    describe("если выборка идет не из строки, то результат будет TypeError", function() {
        let expected = 'TypeError';
        it("при поиске слов в числе 1 будет результ " + expected, 
        function() {
            assert.equal(task1(1), expected);
        });
        it("при поиске слов в числе 2 будет результ " + expected, 
        function() {
            assert.equal(task1(2), expected);
        });
    });
});