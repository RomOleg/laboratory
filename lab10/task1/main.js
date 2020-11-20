/**
 * Функция реальзующая последовательность выполения компилятора
 */
function compiler() {
    
    let readCode = new ReadCode('путь к файлу');
    let parseCode = new ParseCode(readCode.toCode);
    new BufferObjectCode().setBuffer(parseCode);
}
/**
 * Вызываем компилятор
 */
compiler();