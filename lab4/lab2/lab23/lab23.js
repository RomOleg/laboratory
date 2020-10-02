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
    /**
     * переменная массива[][]
     */
    let mas;
    // вызовется когда чтение файла закончится
    // нет ошибок, чтение окончено.
    reader.onload = function(info) {
      // делим строку по отступу
      mas = info.target.result.toString().split("\n");
      for (let i = 0; i < mas.length; i++) {
        // делим массив строк на массив.
        // то есть, mas состоит из 
        // ["1, 2, 3"]
        // ["1, 5, 2"]
        // ["1, 7, 3"]
        // а мы превращаем его в 
        // ["1", "2", "3"]
        // ["1", "5", "2"]
        // ["1", "7", "3"]
        let m = mas[i].split(" ");
        mas[i] = m;
      }
      /**
       * строк в массиве
       */
      let rows = 0;
      /**
       * столбцов в массиве
       */
      let columns = 0;
      // ищем размер массива
      for (let m of mas) {
        columns = columns < m.length ? m.length : columns;
        rows++;
      }
      // возможности javaScript позволяет вставлять переменные прямо в текст
      // например `Цена: ${переменная} рублей`
      console.log(`матрица размером: [${rows}:${columns}]`);     

      console.log(`Исходная матрица:`);
      // выводим масрицу исходную
      mas.forEach(element => {
        console.log(element);
      });
      // транспонирование матрицы
      function transportMas() {
        let transportMas = [];
        for (let i = 0; i < rows; i++) {
          let m = [];
          for (let j = 0; j < columns; j++) {
            if (mas[j][i])
              m.push(mas[j][i]);
            else m.push(0);
          }
          transportMas.push(m);  
        }
        return transportMas;
      }
      let trMas = transportMas();
      // выводим транспонированую матрицу
      console.log(`Транспонированная матрица:`);
      trMas.forEach(element => {
        console.log(element);
      });
    }
    // вызовется при ошибки
    // при чтении произошла ошибка
    reader.onerror = function() {
      console.log(reader.error);
  }
}  
// 1 4 5
// 2 5 6
// 4 6 8