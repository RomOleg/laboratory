/**
 * Формализация алгоритма:
 * - подключение к БД 
 * - распарсить bsm файл
 * - посчитать отработанное время ~ за 1 день ( табель(local) )
 * - посчитать отработку за месяц ( табель(global) )
 * 
 * 
 */

 // -- function -- 

/**
 * распарсим файл bsd в БД
 * @param {file} fileBsm тип файла .bsd
 */
function parseBsm(fileBsm) {
    /**
     * упорядочить сотрудников
     * упорядочить данные а пары вход-выход
     * 
     * записать bsm файл в таблицу время
     */
}
/**
 * Подключается к БД
 * @returns connection DB
 */
function connectDB() {
    
    return connectDB;
}
/**
 * Создать(добавить) записи входа/выхода в табель(локальный)
 * 
 * Создание табеля производиться раз в 3 минуты или по запросу
 */
function createTableLocalLineToWeek() {
    /**
     * посчитать отработанное время
     * сопоставить id и ФИО
     * записать в таблицу табель(local)
     */
}
/**
 * Создать(добавить) записи входа/выхода в табель(глобальный)
 * 
 * Создание табеля производиться раз в месяц или по запросу
 */
function createTableGlobalLineToMonth() {
    /**
     * поститать суммарное отработанное время
     * посчитать отработка по графику
     * посчитать переработка в будни
     * посчитать переработка в праздничные/выходные дни
     * посчитать недароботка
     * 
     * записать в таблицу табель(global)
     */
}


// -- object --

/**
 * Объект табель (локальный)
 * @param {String} surname фамилия
 * @param {String} name имя
 * @param {String} midlename отчество
 * @param {Date} dateInput дата входа
 * @param {Date} dateOutput дата выхода
 * @param {Interger} id идентификатор
 */
function TabelLocal(surname, name, midlename, dateInput, dateOutput, id) {
    this.surname = surname;
    this.name = name;
    this.midlename = midlename;
    this.dateInput = dateInput;
    this.dateOutput = dateOutput;
    this.id = id
}
/**
 * Объект табель (голобальный)
 * @param {Date} year год
 * @param {Date} month месяц
 * @param {Date} day день
 * @param {String} surname фамилия
 * @param {String} name имя
 * @param {String} midlename отчество
 * @param {String} timeWorked отработанное время
 * @param {String} timeWorkedSchedule отработанное по графику
 * @param {String} processingDuringWeekDays преработка в будни
 * @param {String} processingWeekends переработка в выходной день
 * @param {String} weaknesses недароботка
 */
function TabelGlobal(year, month, day, surname, name, midlename, timeWorked, timeWorkedSchedule, processingDuringWeekDays, processingWeekends, weaknesses) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.surname = surname;
    this.name = name;
    this.midlename = midlename;
    this.timeWorked = timeWorked;
    this.timeWorkedSchedule = timeWorkedSchedule;
    this.processingDuringWeekDays = processingDuringWeekDays;
    this.processingWeekends = processingWeekends;
    this.weaknesses = weaknesses
}

 // -- main -- 

