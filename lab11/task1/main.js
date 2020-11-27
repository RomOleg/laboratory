const { ReadCode } = require("../../lab10/task1/ReadCode");

/**
 * Функция реальзующая последовательность выполения компилятора
 */
function compiler() {
    
    let readCode = new ReadCode().openFile('pathFile');
    let parseCode = new ParseCode(readCode.toCode);
    new BufferObjectCode().setBuffer(parseCode);
}
/**
 * Вызываем компилятор
 */
compiler();