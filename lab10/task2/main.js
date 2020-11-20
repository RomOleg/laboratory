const { IntermediateResult } = require("./IntermediateResult");
const { ReadCode } = require("./ReadCode");

function compiler() {
    
    let readCode = new ReadCode();
    let intermediateResult = new IntermediateResult(readCode);
    /**
     * Спрашиваем у пользователя что вывести
     */
    let key = prompt(`1 - Таблица лексем 
                      2 - Таблица идентификаторов
                      3 - Результат оптимизации
                      4 - Обьектный код`, '1');

    switch (key) {
        case 1: intermediateResult.toTableToken(); break;
        case 2: intermediateResult.toTableIdentificator(); break;    
        case 3: intermediateResult.toOptimizationResult(); break;    
        case 4: intermediateResult.toObjectCode(); break;    
        default:
            break;
    }
}
/**
 * Вызываем компилятор
 */
compiler();