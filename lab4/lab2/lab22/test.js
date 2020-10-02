describe("task2", function() {

    describe("замена слова public на private", function() {
      let expected = `private`;
      let line = `public`;
      it ("при замене в строке получаем результат той же строки только с изменеными словами или та же строка",
      function() {
        assert.equal(task2(line), expected);  
      });
    });

    let expected = 'TypeError';
    it("при замене не строки результат будет " + expected, 
    function() {
        assert.equal(task2(1), expected);
    });
});