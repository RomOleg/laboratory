/**
 * Класс для вывода промежуточных результатов
 */
export class IntermediateResult {

    constructor(code) {}
    /**
     * Выведет таблицу лексем
     */
    toTableToken() {}
    /**
     * Выведет таблицу идентификаторов
     */
    toTableIdentificator() {}
    /**
     * Выведет результат оптимизации
     */
    toOptimizationResult() {}
    /**
     * Выведет объектный код
     */
    toObjectCode() {
        let parseCode = new ParseCode(code);
        return parseCode.toObjectCode();
    }
}