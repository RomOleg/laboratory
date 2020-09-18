let str = `Для Win11111dows есть ещё Visual Stud222io (не путать с Visual 
    Studio Code). Visual Studio – это 4платная мо3щная среда 
    разработки, которая работает только на 5555. Она 
    хорошо подходит для .NET платформы. У неё есть бе77сплатная 
    77777777777777777777версия, кот5орая назыв555ается Visual St66666666udio 
    Community.`;
// объявляем массив для нахождения всех цифр
let mas = str.match(/[0-9]+/g);
// переменная для нахождения самого длинного числа
let longNumb = "";
for (const it of mas) {
    // если размер элемента массива больше размера longNumb
    // то к longNumb приравниваем элемент массива
    if (it.length > longNumb.length) longNumb = it;
}    
console.log(longNumb);