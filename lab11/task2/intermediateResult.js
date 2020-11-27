/**
 * Класс для вывода промежуточных результатов
 */
export class IntermediateResult {

    constructor(code) {}
    /**
     * Выведет таблицу лексем
     */
    toTableToken() {
        return new TableToken();
    }
    /**
     * Выведет таблицу идентификаторов
     */
    toTableIdentificator() {
        return new TableIdentificator();
    }
    /**
     * Выведет результат оптимизации
     */
    toOptimizationResult() {
        return new OptimizationResult();
    }
    /**
     * Выведет объектный код
     */
    toObjectCode() {
        return new ObjectCode();
    }
}