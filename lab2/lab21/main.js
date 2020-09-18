let line = "Программи́рование — процесс создания " +
"компьютерных программ. По выражению юодного из " +
"основателей языков программирования Никлауса Вирта " +
"«Программы = алгоритмы + структуры данных». " +
"Программирование основывается на использовании языков " +
"программирования";
// делим строку по пробелу и записываем получившиеся слова в массив array
let array = line.split(" ");
// массив хранящий два слова, у которых последнее буква
// первого слова равна первой букве второго слова 
let twoWord = [];
// пустая строка для сравнивания двух слов
let str = "";
for (let key of array) {
    // === в javascript предполагает строгое равенство
    // если последний буква первого слова равен первомой букве 
    // второго слова, то записываем их в массив twoWord
    if (str[str.length - 1] === key[0]) {
        let ar = [str, key];
        // добаляем массив из двух слов 
        // push() добавляет элемент в конец массива
        twoWord.push(ar);
    }
    str = key;
}
// выводим массив слов в консоль
// console.log(array);
// выводим найденные слова из массива twoWord
twoWord.forEach(element => {
    console.log(`1 слово: ${element[0]} - 2 слово: ${element[1]}`);
});
