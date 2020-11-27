class ObjectCode extends Plug {
    /**
     * Выведет объектный код
     */
    toObjectCode(code) {
        let parseCode = new ParseCode(code);
        return parseCode.toObjectCode();
    }
}