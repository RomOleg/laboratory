'use strict'
function readFile(input) {
    /**
     * Через <input> можно выбрать несколько файлов, поэтому 
     * \input.files – псевдомассив выбранных файлов. Здесь у 
     * нас только один файл, поэтому мы просто берём 
     * input.files[0].
    */ 
   let file = input.files[0];
   /**
    * FileReader объект, цель которого читать данные из Blob 
    * (и, следовательно, из File тоже).
    * Данные передаются при помощи событий, так как чтение с 
    * диска может занять время.
    * 
    * Основные методы:
    * readAsArrayBuffer(blob) – считать данные как ArrayBuffer
    * readAsText(blob, [encoding]) – считать данные как строку 
    * (кодировка по умолчанию: utf-8)
    * readAsDataURL(blob) – считать данные как base64-кодированный URL.
    * abort() – отменить операцию.
   */
   let reader = new FileReader();
   //  считать данные как строку (кодировка по умолчанию: utf-8)
   reader.readAsText(file);
    // вызовется когда чтение файла закончится
    // нет ошибок, чтение окончено.
    reader.onload = function(info) {
        // делим строку по отступу
        // использован метод match() вместо split()
        // Метод match() для строки возвращает совпадения с 
        // регулярным выражением
        // в то время как split() делит строку по заданному регулярному выражению
        // пример можно посмотреть в конце файла
        // флаг - g обозначает поиск по всему тексту, без него только первое вхождение
        line = info.target.result.toString();
        mas = line.match(/([A-Za-zА-Яа-я]+)/g);
        console.log("Разделенные пробелом слова, приведены в массиве:");
        console.log(mas);
        /**
            Объект типа RegExp, или, короче, регулярное выражение, 
            можно создать двумя путями /pattern/флаги
            new RegExp("pattern"[, флаги])
            pattern - регулярное выражение для поиска (о замене - 
            позже), а флаги - строка из любой комбинации символов 
            g(глобальный поиск), i(регистр неважен) и m(многострочный 
            поиск).
         */
      }
      // вызовется при ошибки
      // при чтении произошла ошибка
      reader.onerror = function() {
        console.log(reader.error);
    }
    
    // обработка события нажатия, чтобы скачать файл с найденным словом
    document.getElementById('todownload').onclick = function() {
        /**
            Объект типа RegExp, или, короче, регулярное выражение, 
            можно создать двумя путями /pattern/флаги
            new RegExp("pattern"[, флаги])
            pattern - регулярное выражение для поиска (о замене - 
            позже), а флаги - строка из любой комбинации символов 
            g(глобальный поиск), i(регистр неважен) и m(многострочный 
            поиск).
         */
        let re = new RegExp(prompt("Шаблон:", "JavaScript"), "g");
        let fw  = findWord(re);
        let myData = 'data:application/txt;charset=utf-8,' 
            + encodeURIComponent(fw[0]);
        this.href = myData;
        this.download = 'fileWord.txt';
    }
    
}
// объявляем переменную для хранения строк
let line;
// объевляем массив для хранения строк
let mas = [];
/**
 * Метод поиска слова по шаблону
 * Пример шаблона:  JavaScript
 * @param {String} template - шаблон поиска
 * @returns {String} - возвращает найденное слово, в противном случае null
 */
function findWord(template) {
    let word = null;
    word = line.match(template);    
    return word;
}
/**
 * Пример того, как можно усложнить простой решение
 */
// замудренное решение
// let s = `a+ f, g_ c1 s.
//             dssss89 as_+ fvd/s*d-f`;
// console.log( s.split(/[\p{N}\p{P}\p{Z}\p{C}\p{S}\p{M}]+/gu) );
// простое решение того же самого
// console.log( s.match(/[A-Za-z]+/g) );
