'use strict';

// 1.ДЗ
// const name = '«Генератор защитного поля»';
// let price = 1000;
// const firstMessage =
//     'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов';
// price = 2000;
// const secondMessage =
//     'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов';

// console.log(firstMessage);

// console.log(secondMessage);

// 2.ДЗ

// 1.Написать скрипт проверки, сравни эти значения и по результатам вывести..

// 2.Объявить переменные

// const invoice = 150;
// const stock = 100;
// let message;

// if (invoice === 100) {
//     message = 'Заказ оформлен, с вами свяжется менеджер'
// } else if (invoice === 50) {
//     message = 'Заказ оформлен, с вами свяжется менеджер'
// } else if (invoice === 150) {
//     message = 'На складе недостаточно товаров!'

// 1. написать скрипт имитирующий авторизацию

// 2. Записать в message рузельтат одно из трёх сообщений.

// 3. сделать запрос на пароль и записать его в переменную userPassword

// 4. реализовать 3 реакции на запрос

// const userPassword = 'jqueryismyjam';
// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль';

// let message;

// if (userPassword === 'jqueryismyjam') {
//     message = 'Добро пожаловать!';
//     console.log(message);
// } else if (userPassword === null) {
//     message = 'Отменено пользователем!';
//     console.log(message);
// } else if (userPassword === 'bla') {
//     message = 'Доступ запрещен, неверный пароль';
//     console.log(message);
// }

// 4.ДЗ

// 1. Написать скрипт о списании средств на покупку товара

// 2. Объявить перменные, инициализировать их
// 3. Создать переменую для вывода сообщения
// 4. Создать результирующу переменую с финальмы счётом
// 5. Создать перменную которая  принимает разницу credits и totalPrice

// const orderPieces = 12;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid;
// let balanceCredit = credits - orderPieces * pricePerDroid;
// let message;

// if (orderPieces >= 1 && orderPieces < 8) {
//     message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
//     console.log(message);
// } else if (orderPieces === null) {
//     message = 'Отменено пользователем!';
//     console.log(message);
// } else if (orderPieces > 1 && orderPieces < 13) {
//     message = 'Недостаточно средств на счету!';
//     console.log(message);
// } else {
//     message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
//     console.log(message);
// }

// console.log(message)

// 5Дз

// Задача
// Написать скрип иметирующий заказ

// 1. Сделать запрос у пользователя страны prompt

// let userIput = prompt('Введи страну для доставки');
// console.log(userIput);

// // 2. Первести ввод в нужный регистр

// // let normalize = userIput[0].toUpperCase(0) + userIput.slice(1).toLowerCase();
// // console.log('normalize:', normalize);

// // 3. Создать нужные перменные

// const countryName = userIput;
// let price;

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка не доступна';

// // 4. Создать перменную для вывода сообщий

// let message;

// //  5. Реализовать проверку кода
// if (userIput !== null) {
//     switch (countryName) {
//         case 'Китай':
//             price = 100;
//             message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
//             console.log(message);
//             break;

//         case 'Австралия':
//             price = 170;
//             message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
//             console.log(message);
//             break;

//         case 'Индия':
//             price = 80;
//             message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
//             console.log(message);
//             break;

//         case 'Ямайка':
//             price = 120;
//             message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
//             console.log(message);
//             break;

//         default:
//             console.log(NO_DELIVERY);
//     }
// } else {
//     console.log(CANCELED_BY_USER);
// }

// •	Китай - 100 кредитов
// •	Австралия - 170 кредитов
// •	Индия - 80 кредитов
// •	Ямайка - 120 кредитов

// 5. Если цена больше 0 сформировать сообщение о стоимости доставки

// const countryName = 'КитаЙ';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price;
// let country;

// if (countryName === null) {
//     message = CANCELED_BY_USER;
// } else {
//     country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
//     console.log(country);
//     switch (country) {
//         case 'Китай':
//             price = 100;
//             break;

//         case 'Австралия':
//             price = 170;
//             break;

//         case 'Индия':
//             price = 80;
//             break;

//         case 'Ямайка':
//             price = 120;
//             break;

//         default:
//             message = NO_DELIVERY;
//             console.log(message);
//     }
// }
// if (price > 0) {
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     console.log(message);
// }

// if (countryName === 'КитаЙ') {
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
//     console.log(message);
// } else if (countryName === null) {
//     message = 'Отменено пользователем!';
// } else if (countryName === 'Чили') {
//     message = 'В выбранную страну доставка недоступна.';
//     console.log(message);
// }

// const colors = ['red', 'green', 'blue'];
// colors.splice(2, 0, 'purple');
// console.log(colors);

// Модуль 2

// 1. Создать функцию которая получает массив, и возвращает стрку
//    '${номер элемента} - ${значение элемента}'

// let result = '';

// const getItemsString = function (array) {
//     for (let i = 0; i < array.length; i += 1) {
//         result += `${i + 1} - ${array[i]}\n`;
//     }
//     return result;
// };

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// // console.log(getItemsString([5, 10, 15]));

// 2.дз

// Функция подсчитать стоимость гравировки укршаения

// 1.создать функцию

// const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
//     message.split(' ').length * pricePerWord;

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         10,
//     ),
// );

// 3.дз

// Найти самое длиное слово в строке

// function findLongestWord(string = '') {
//     let words = string.split(' ');
//     console.log(words);
//     let longestWords = words[0];

//     for (let i = 0; i < words.length; i += 1) {
//         if (words[i].length > longestWords.length) {
//             longestWords = words[i];
//         }
//     }
//     return longestWords;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));

// 4.дз

// Форматирование строки в зависимости от длинны строки

// function formatString(string, maxLength = 40) {
//     let Letter = string.split('');

//     for (let i = 0; i < Letter.length; i += 1) {
//         if (Letter.length > maxLength) {
//             return Letter.splice(0, 40, '...').join('');
//         } else if (Letter.length > maxLength) {
//             return console.log(Letter.splice(0, 30).join(''));
//         }
//     }

//     return Letter.join('');
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//     formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );
// // 'Vestibulum facilisis, purus ne...'

// 5.дз

// function checkForSpam(str) {
//     let spamWords = ['sale', 'spam'];

//     for (let i = 0; i < spamWords.length; i += 1) {
//         if (str.toLowerCase().includes(spamWords[i]) > 0) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// 6.д3

// new Array(10) Хранит 10 леменетов
// Этот массив нужно наполнить

//    Созать пустой массив и наполнить его методом push

// function mapArray(array) {
//     const numbers = new Array(array.length);
//     // console.log(array);

//     for (let i = 0; i < array.length; i += 1) {
//         numbers[i] = array[i] * 10;
//     }
//     return numbers;
// }
// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

// 7.ДЗ

// Создание нового массива на основе отбора из исходного массива

// 1.Напиши функцию filterArray(array), принимающую 1 параметр array - массив

// function filterArray(array) {
//     const numbers = [];

//     for (let i = 0; i < array.length; i += 1) {
//         // numbers[i] = array[i];
//         if (Number.isFinite(array[i])) {
//             numbers.push(array[i]);
//         }
//     }

//     return numbers;
// }

// 2. Выполнить проверку каждого эелемента массива на целое число

// 3.  Добавить числа в массив

// 4. Выполнить проверку на чилсо

// console.log(filterArray([-2, 0, 2]));
// // // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, '100']));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // // [2]

// 8.дз

// Вычисление суммы массива

// 1. Функция принимает масисв чисел

// function reduceArray(array) {
//     'use strict';
//     let total = 0;

//     for (let i = 0; i < array.length; i += 1) {
//         total += array[i];
//     }
//     return total;
// }

// console.log(reduceArray([1, 2, 3]));

// console.log(reduceArray([-2, 0, 2]));

// console.log(reduceArray([1, 2, 2.5]));

// 2. Если массив не пустой посчитать сумму  всех элэментов исп цыkл for

// 3. что бы подсчитать сумму исп переменную total

// 4. Вернуть 0 если масив пустой, и сумму в противном случае

// 9.дз

// function isLoginValid(login, min = 4, max = 16) {
//     return login.length >= min && login.length <= max;
// }

// function addLogin(allLogins, login) {
//     'use strict';
//     const SUCCESS = 'Логин успешно добавлен!';
//     const REFUSAL = 'Такой логин уже используется!';
//     const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//     let message;

//     if (isLoginValid(login) == false) {
//         message = ERROR;
//     } else if (isLoginUnique(allLogins, login) !== true) {
//         message = REFUSAL;
//     } else {
//         allLogins.push(login);
//         message = SUCCESS;
//     }
//     return message;
// }

// function isLoginUnique(allLogins, login) {
//     return allLogins.includes(login) ? false : true;
// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax'));
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));

// const Hero = function (name, xp) {
//     this.name = name;
//     this.xp = xp;
// };

// Hero.prototype.gainxp = function (amount) {
//     console.log(`some message ${this.name} ${amount}`);
//     this.xp += amount;
// };

// const Mystick = function (name, xp, spell) {
//     Hero.call(this, name, xp);
//     this.spell = spell;
// };

// Mystick.prototype = Object.create(Hero.prototype);
// Mystick.prototype.constructor = Mystick;

// Mystick.prototype.cast = function () {
//     console.log(`${this.name} attacks with ${this.spell}`);
// };

// const jax = new Mystick('lisitk', 2000, 'two-hand-swords');
// console.log(jax);
// jax.cast();

// jax.gainxp(300);

// class Guest {
//     constructor(name, bill) {
//         this.name = name;
//         this.bill = bill;
//     }
//     getFullinfo() {
//         console.log(`guest ${this.name} сost ${this.bill}`);
//     }
// }

// const lusy = new Guest('Petya', 200);
// console.log(lusy);

// console.log(lusy instanceof Guest); // true
// console.log(lusy instanceof Object); // tru

// lusy.getFullinfo();

// class Guest {
//     // Метод конструктор Оьязателен!
//     constructor(name, bill) {
//         this.name = name;
//         this.bill = bill;
//     }
//     // Метод класса, который вызывает и возвращает параметр.
//     get name() {
//         return this._name;
//     }
//     // Метод класса, который позволяет перезаписывать аргументы.
//     set name(value) {
//         return (this._name = value);
//     }
// }

// // Создаётся новый пустой объек, куда присваетвася конструктор класс Guest.
// const lusy = new Guest('Petya', 200);
// console.log(lusy.name);

// //Что бы присовить новое имя необходимо, перезаписать переменную.
// lusy.name = 'jin tonik';
// console.log(lusy.name);

// class Calc {
//     constructor() {}

//     static get PI() {
//         return 3.14;
//     }

//     static add(...args) {
//         return args.reduce((acc, next) => acc + next, 0);
//     }

//     static mult(...args) {
//         return args.reduce((acc, next) => acc * next, 1);
//     }
// }

// console.log(Calc.add(2, 3, 7, 4));
// console.log(Calc.PI);
// console.log(Calc.mult(9, 7, 5, 3, 1));

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     move() {
//         console.log(`
//     this some name is ${this.name}`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     bark() {
//         console.log('whoof!');
//     }
//     moveAdnMakeSound() {
//         super.move();
//         this.bark();
//     }
// }

// const dog = new Dog('jhon', 'AAaauuuu');
// console.log(dog);
// console.log(dog.move());
// console.log(dog.bark());
// console.log(dog.moveAdnMakeSound());

// class User {
//     constructor(name, age, followers) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }

//     getInfo() {
//         console.log(
//             `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
//         );
//     }
// }

// console.log(typeof User);

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo());

// console.log(typeof mango.getInfo);

// const poly = new User('Poly', 3, 17);
// console.log(poly.getInfo());

// 5 модуль
// 3.дз

// Напиши класс Storage, который будет создавать объекты для
// управления складом товаров.При вызове будет получать один
// аргумент - начальный массив товаров, и записывать его в
// свойство items.Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         this.items.push(item);
//     }

//     removeItem(item) {
//         this.items = this.items.filter(itemName => itemName !== item);
//     }
// }

// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];
// const storage = new Storage(goods);

// console.log(storage.getItems());

// storage.addItem('Дроид');
// console.log(storage.getItems());

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());

//4.дз

// Напиши класс StringBuilder.На вход он получает один параметр
// - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

// class StringBuilder {
//     constructor(str) {
//         this._value = str;
//     }

//     get value() {
//         return this._value;
//     }
//     append(str) {
//         this._value += str;
//     }

//     prepend(str) {
//         this._value = str + this._value;
//     }
//     pad(str) {
//         this.prepend(str) + this.append(str);
//     }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value);

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// 5.дз

// class Car {
//     // Write code under this line
//     static getSpecs({
//         maxSpeed = 0,
//         speed = 0,
//         isOn = false,
//         distance = 0,
//         price = _price,
//     } = car) {
//         return `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`;
//     }
//     constructor({
//         maxSpeed = 0,
//         speed = 0,
//         isOn = false,
//         distance = 0,
//         price = 0,
//     } = set) {
//         this.maxSpeed = maxSpeed;
//         this.speed = speed;
//         this.isOn = isOn;
//         this.distance = distance;
//         this._price = price;
//     }
//     get price() {
//         return this._price;
//     }
//     set price(value) {
//         this._price = value;
//     }
//     turnOn() {
//         this.isOn = true;
//     }
//     turnOff() {
//         this.isOn = false;
//         this.speed = 0;
//     }
//     accelerate(value) {
//         this.speed + value <= this.maxSpeed
//             ? (this.speed += value)
//             : (this.speed = this.maxSpeed);
//     }

//     decelerate(value) {
//         const currentSpeed = this.speed - value;
//         currentSpeed >= 0 ? (this.speed -= value) : (this.speed = 0);
//     }

//     drive(hours) {
//         if (this.isOn) {
//             this.distance += hours * this.speed;
//         }
//     }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

//  отображение массива чисел с использованием функции, содержащей аргумент
// const el = [1, 2, 3, 4, 5];
// const num = el.map(function (item) {
//     return item * 2;
// });

// console.log(num);

// array.filter(callback[(currentValue, index, array)]);

// 0. massiv
// 1. mhethod
// 2. callback
// 3. currentValue callback
// 4. index
// 5.  Array

// const users = [
//     { id: '000', name: 'Mango', isActive: true },
//     { id: '001', name: 'Poly', isActive: false },
//     { id: '002', name: 'Ajax', isActive: true },
//     { id: '003', name: 'Chelsey', isActive: false },
// ];

// const getUser = (arr, id) => arr.find(a => a.id === id);

// console.log(getUser(users, '003'));

// every возвращает результат тру и фалс для  большеого колличества элементов
// some  возвращает результат  тру и фалс если хотя бы есть одно совпадения!!

// const fruits = [
//     { name: 'apples', amount: 100 },
//     { name: 'bananas', amount: 0 },
//     { name: 'grapes', amount: 50 },
// ];

// // Здесь фалс потому что он должен вернуть все фркуты бошль 0
// const el = fruits.every(obj => obj.amount > 0);
// console.log(el);

// // Здесь есть одни фрукрт amount: 0 поэтому вернёт тру!
// const el = fruits.some(obj => obj.amount > 0);
// console.log(el);

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// // Синтаксис с перменной
// const sum = tweets.reduce((acc, value) => acc + value.likes, 0);

// console.log(sum);

// // Синтаксис с функцией
// const tweetLike = tweets => tweets.reduce((acc, value) => acc + value.likes, 0);
// console.log(tweetLike(tweets));

// const tags = tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
// }, []);
// console.log(tags);

// // Синтаксис с функцией
// const getAllTags = tweets =>
//     tweets.reduce((allTags, tweet) => {
//         allTags.push(...tweet.tags);
//         return allTags;
//     }, []);
// console.log(tags);

// const allTagStat = (acc, value) => {
//     if (!acc.hasOwnProperty(value)) {
//         acc[tag] = 0;
//     }

//     acc[tag] += 1;

//     return acc;
// };

// const countTags = tags => tags.reduce(allTagStat, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// [0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
//     return previousValue + currentValue;
// });

// console.log(tagCount);

// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log(clients);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers
//     .filter(x => x % 2 === 0)
//     .map(y => y * 2)
//     .reverse();

// console.log(result);

// 6 Модуль

// 1.дз

// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];

// const getUserNames = array => array.map(({name}) => name);

// console.log(getUserNames(users));

// 2.дз

// const getUsersWithEyeColor = (array, color) =>
//     array.filter(({ eyeColor }) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));
// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];

// 3.дз

// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];

// const getUsersWithGender = (array, gender) =>
//     array
//         .filter(el => {
//             return el.gender === gender;
//         })
//         .map(({ name }) => name);

// console.log(getUsersWithGender(users, 'male'));

// 4.дз

// Получи массив только неактивных пользователей
// (отфильтруй по значению свойства isActive)

// Используй деструктурирующее присваивание для параметра функции({ isActive })
// без пробелов и переносов на новую строку.Используй оператор !.

// Используй только перебирающие методы массива которые не изменяют(не мутируют)
// исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие метод

// 4.дз

// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];

// const getInactiveUsers = array => array.filter(({ isActive }) => !isActive);

// console.log(getInactiveUsers(users));

// 6.дз
// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];
// const getUserWithEmail = (array, mail) =>
//     array.find(({ email }) => email === mail);

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));
// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

// 6 Задача

// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];

// const getUsersWithAge = (array, min, max) =>
//     array
//         .filter(({ age }) => age > min && age < max)
//         .map(({ name, email }) => ({ name, email }));

// console.log(getUsersWithAge(users, 20, 30));
// /* [
//     { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
//     { name: 'Elma Head', email: 'elmahead@omatom.com' },
//     { name: 'Carey Barr', email: 'careybarr@nurali.com' }
// ] */

// console.log(getUsersWithAge(users, 30, 40));
// // /* [
// //     { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
// //     { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
// //     { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
// //     { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
// // ] */

// 7 Задача

// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];

// const calculateTotalBalance = array =>
//     array.reduce((totalBalance, { balance }) => totalBalance + balance, 0);

// console.log(calculateTotalBalance(users));

// 8.Задача

// filter, includes и map
// Получи массив имен всех пользователей у которых есть друг
// с заданным именем.

// Используй деструктурирующее присваивание для параметра функции
// { friends } и({ name }) без пробелов и переносов на новую строку

// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];

// const getUsersWithFriend = (array, friendName) =>
//     array
//         .filter(({ friends }) => friends.includes(friendName))
//         .map(({ name }) => name);

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// // [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // [ 'Elma Head', 'Sheree Anthony' ]

// 9 Задача

// Получи массив имен(поле name) людей, отсортированных
// в зависимости от количества их друзей(поле friends)

// Избегаем мутации исходного массива: т.к.метод sort
// изменяет(мутирует) исходный массив, то следует сделать
// копию массива и сортировать уже копию, а не исходный массив.

// Копирование массива:

// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];
// Write code under this line
// const getNamesSortedByFriendsCount = array =>
//     array
//         .slice()
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .map(({ name }) => name);

// console.log(getNamesSortedByFriendsCount(users));

// // 10. Задача

// Получи массив всех умений всех пользователей(поле skills),
//     при этом не должно быть повторяющихся умений и они должны
// быть отсортированы в алфавитном порядке.

// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         id: '249b6175-5c30-44c6-b154-f120923736f5',
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];

// const getSortedUniqueSkills = array =>
//     array
//         .filter(skill => skill.skills)
//         .reduce((acc, value) => [...new Set(acc.concat(value.skills))], [])
//         .sort();

// const set = new Set();

// console.log(getSortedUniqueSkills(users));

