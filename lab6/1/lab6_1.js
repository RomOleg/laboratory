/**
 * Создает объект Person
 * @param {String} name - имя  
 * @param {Number} age - возраст
 * @param {String} gender - пол
 * @param {Object} address - адрес
 */
function Person(name, age, gender, address) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
}
/**
 * Создает объект Address
 * @param {String} country - страна 
 * @param {String} city - город
 * @param {String} street - улица
 */
function Address(country, city, street) {
    this.country = country;
    this.city = city;
    this.street = street;
}
/**
 * Храним наших персон
 */
let person = [];
/**
 * Создаем экземпляр объекта Address
 */
let addressAnna = new Address('Russia', 'Moscov', 'Pushkina');
/**
 * создаем экземпляр объекта Person
 */
let anna = new Person('Anna', 20, 'famale', addressAnna);
/**
 * Создадим еще парочку людей
 */
let addressVladimir = new Address('Russia', 'Irkutsk', 'Lermontova');
let vladimir = new Person('Vladimir', 21, 'male', addressVladimir);

let addressIvan = new Address('Russia', 'Irkutsk', 'Lenina');
let ivan = new Person('Ivan', 21, 'male', addressIvan);
/**
 * Добавляем персон в массив person, для сериализации
 */
person.push(anna);
person.push(vladimir);
person.push(ivan);
/**
 * Сериализует input
 * @param input сериализуемый объект
 * @returns результат сериализации (string) 
 */
Person.serialize = function ( input ) {
    return JSON.stringify( input );
}
/**
 * Сериализуем экземпляр объекта Person
 */
let ser = Person.serialize(person);
// выводим результат сериализации в консоль
console.log('Результат выполения сериализации\n' + ser);
/**
 * десериализует input
 * @param input сериализуемый объект
 * @returns результат сериализации (string) 
 */
Person.deserialize = function ( input ) {
    return JSON.parse( input );
};
// десериализация
let personDeserialize = Person.deserialize(ser);
// выводим результат десериализации в консоль
console.log('Результат выполнения десериализации\n' + personDeserialize);