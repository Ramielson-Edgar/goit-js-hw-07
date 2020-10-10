'use strict';

// const hotel = {
//     name: 'vasya',
//     stars: 5,
//     сopacity: 100,
// };

// const entries = Object.entries(hotel);
// console.log(entries);

// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];

//     console.log(`${key}: ${value}`);
// }

// const food = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
// };

// const values = Object.values(food);
// console.log(food);

// let total = 0;

// for (const value of values) {
//     total += value;
// }

// console.log(total);

// const temperature = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const min = Math.min(...temperature);
// console.log(min);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// const massive = houses.slice();
// console.log(massive);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// const copyhouses = [...houses, 'lusy big hott ass'];
// console.log(copyhouses);

// const houses = ['Arryn', 'Frey', 'Greyjoy'];
// const massive = ['Stark', 'Lannister', 'Tyrell'];

// const min = [...houses, ...massive];
// console.log(min);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];
// console.log(housesInDebt);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// const updatedHouses = [
//     ...houses.slice(0, 3),
//     'Frey of the Crossing',
//     ...houses.slice(4),
// ];

// console.log(updatedHouses);

// const target = {
//     id: 24,
//     isOnline: true,
//     ...{ name: 'Mango', age: 2 },
//     ...{ age: 7, isOnline: false },
// };

// console.log(target);

// const a = {
//     x: 1,
//     y: 2,
// };

// const b = {
//     x: 0,
//     z: 3,
// };

// const c = Object.assign({}, a, b);
// console.log(c);

// const g = {
//     ...a,
//     ...b,
// };

// console.log(g);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { x: 5, j: 10, ...a, z: 15, ...b };
// console.log(c);

// const lion = {
//     hasTail: true,
//     legs: 4,
// };

// const eagle = {
//     canFly: true,
// };

// const chimera = { ...lion, ...eagle };
// console.log(chimera);

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

// const { name, ...vasya } = hotel;
// console.log(name);
// console.log(vasya);

// const rgb = [200, 255, 100];

// const [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // Blue: 255

// let message = '';
// const user = {
//     age: 20,
//     hobby: 'html',
//     name: 'Mango',
//     premium: true,
// };

// user['mood'] = 'happy';
// user['full time'] = true;
// user['hobby'] = 'skydiving';
// user['premium'] = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//     message += `${key}: ${user[key]}\n`;
// }

// const countProps = function (obj) {
//     const keys = Object.keys(obj);
//     obj = keys;

//     let total = 0;

//     total += Object.keys(obj).length;

//     return total;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// 3.дз;
// Поиск наибольшего значения среди свойств объекта

// 1. Принимает oбъект сотрудников и возвращает самого продуктивного сотрудника

// const findBestEmployee = function (employees) {
//     const maxWork = Math.max(...Object.values(employees));
//     const keys = Object.keys(employees);
//     let message = '';
//     for (const key of keys) {
//         if (maxWork === employees[key]) {
//             message = key;
//         }
//     }
//     return message;
// };

// const developers = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
// };

// console.log(findBestEmployee(developers));

// const supports = {
//     poly: 12,
//     mango: 17,
//     ajax: 4,
// };
// console.log(findBestEmployee(supports));

// const sellers = {
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
// };
// console.log(findBestEmployee(sellers));

// 4.дз

// Суммирование значений свойств объекта

// Напиши функцию countTotalSalary(employees)
// принимающую объект зарплат.Функция считает
// общую сумму зарплаты работников и возвращает
// ее.Каждое поле объекта, передаваемого в функцию,
//     имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//     const value = Object.values(employees);
//     employees = value;
//     console.log(value);

//     let total = 0;

//     for (let values of value) {
//         total += values;
//     }

//     return total;
// };
// const developers = {
//     mango: 300,
//     poly: 250,
//     alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//     kiwi: 200,
//     lux: 150,
//     chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500

// 5.Дз

// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop),
//     которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop
// из каждого объекта в массиве.

// Используй метод push для добавления значения в массив
// и оператор in для проверки наличия свойства в объекте.

// Ничё сложного.Делаешь внутри функции вначале массив result
// в который будешь добавлять значения.Перебираешь циклом массив,
//     в value у тебя объект, в параметре prop название нужного свойства.
// Вот и проверяешь, если prop in value, то добавляешь это свойство через result.push
// Потом вернул result и всё

// function getAllPropValues(array, prop) {
//     let result = [];

//     for (const value of array) {
//         if (value.prop in prop) {
//             result.push(value[prop]);
//         }
//     }

//     return result;
// }

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name'));
// console.log(getAllPropValues(products, 'quantity'));
// console.log(getAllPropValues(products, 'category'));

// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена умноженная на количество).
// Вызовы функции для проверки работоспособности твоей реализации.

// 6.Дз
// function calculateTotalPrice(array, prop) {
//     let total = 0;

//     for (const value of array) {
//         if (value.name === prop) {
//             total += value.price * value.quantity;
//         }
//     }

//     return total;
// }

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, 'Радар'));
// // 9080

// console.log(calculateTotalPrice(products, 'Сканер'));
// // // 10200

// console.log(calculateTotalPrice(products, 'Захват'));
// // // 2400
// console.log(calculateTotalPrice(products, 'Дроид'));

// TEST

// const target = {
//     id: 24,
//     isOnline: true,
//     ...{ name: 'Mango', age: 2 },
//     ...{ age: 7, isOnline: false },
// };
// console.log(target[name]);???

// const rounder = function (palces) {
//     return function (number) {
//         return Number(number.toFixed(palces));
//     };
// };

// const r1 = rounder(2);
// const r2 = rounder(3);

// console.log(r1(3.456789));
// console.log(r2(3.456789));
// console.log(r1(3.456789));
// console.log(r2(3.456789));

// const b = function () {
//     console.log('Это первый ', this);
//     console.log('Это второй', this);
// };

// const o = {
//     name: 'krivetka',
// };

// o.z = b;
// console.log(o);

// o.z();

// const changeColor = function (color) {
//     console.log('change color', this);
//     this.color = color;
// };

// Объкеты

// 1.дз

// const addIndex = (element, index) => element + index;

// const subIndex = (element, index) => element - index;

// function mapArray(array, cb) {
//     const numbers = new Array(array.length);

//     console.log(numbers);

//     for (let i = 0; i < array.length; i += 1) {
//         const element = array[i];
//         const index = i;
//         numbers[i] = cb(element, index);
//     }
//     return numbers;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(mapArray(arr, addIndex));

// console.log(mapArray(arr, subIndex));

// Функция isUniq принимает три параметра - element,
// index и arr.Функция возвращает true или false
// в зависимости от того встречается ли элемент первый
// раз в массиве(true) или этот элемент в массиве уже встречался(false).

// Функция isEven принимает один параметр - element.
// Функция возвращает true или false в зависимости от
// того является ли элемент четным числом или нет.

// Функция filterArray(array, cb), принимает 1 -
// м параметром array - массив чисел, а вторым параметром cb -
// функцию обратного вызова(callback).Дополни тело функции так,
// чтобы функция filterArray заполняла новый пустой массив numbers
// только теми элементами из массива array, для которых вызов функции cb вернет true.

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = element => element % 2 === 0;

// function filterArray(array, cb) {
//     'use strict';
//     const numbers = [];
//     for (let i = 0; i < array.length; i += 1) {
//         const element = array[i];
//         const index = i;
//         if (cb(element, index, array)) {
//             numbers.push(element);
//         }
//     }
//     return numbers;
// }
// const arr = [1, 2, 3, 4, 5, 1, 2, 5];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // // [2, 4, 2]

// 3.дз

// Функции add, sub и mult принимают два параметра - accum и element,
// возвращает число - сумму, разность или произведение параметров.
// Дополни тело функции reduceArray строкой присвоения accum вызова функции cb.
// Функция reduceArray должна будет подсчитать сумму или разность или произведение
// всех элементов массива в зависимости от того какая именно из трех функция
// (add, mult, sub)
// удет передана в качестве cb.

// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//     let i;
//     let accum;

//     if (arguments.length >= 3) {
//         accum = initial;
//         i = 0;
//     }

//     if (arguments.length === 2) {
//         accum = array[0];

//         i = 1;
//     }

//     for (i; i < array.length; i += 1) {
//         const element = array[i];
//         accum = cb(accum, element);
//     }
//     return accum;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

// 4.дз

// this в методах объекта
// Расставь отсутствующие this в методах объекта
// account.В комментариях показаны операции с объектом
// и ожидаемые результаты.

// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//         return (this.discount = value);
//     },
//     showOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost;
//         this.orders.push(order);
//     },
// };
// const copyAccount = Object.assign({}, account);
// copyAccount.orders = [...account.orders];
// // копируем для автотестов ссылочные типы

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000

// 5.дз

// Оформи вызов метода invokeInventoryAction таким образом,
// чтобы в качестве this для методов
// inventory.add
// inventory.remove выступал объект inventory

// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//         this.items.push(itemName);
//         return `Adding ${itemName} to inventory`;
//     },
//     remove(itemName) {
//
//         return `Removing ${itemName} from inventory`;
//     },
// };

// const invokeInventoryAction = function (itemName, action) {
//     const act = action(itemName);
//     const msg = `Invoking action on ${itemName}`;
//     return { act, msg };
// };

// const invokeAdd = invokeInventoryAction(
//     'Medkit',
//     inventory.add.bind(inventory),
// );

// const arrayAdd = [...inventory.items];

// //console.log(invokeAdd);
// //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']

// const invokeRemove = invokeInventoryAction(
//     'Gas mask',
//     inventory.remove.bind(inventory), // Write code in this line
// );

// const arrayRemove = [...inventory.items];

// // console.log(invokeRemove);
// //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

// console.log(arrayRemove);
// // ['Knife', 'Medkit']

// Вебинар;

// //  1. Это конструктор.
// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };

// // 2. это хранилище объектов, экземпляр для конструктора

// User.prototype.changePassword = function (newPassword) {
//     this.password = newPassword;
// };

// const emptyConstruktor = new User({
//     email: 'lusy@mail.com',
//     password: 'lovesukmybigblackcock',
// });

// // Вызываю здесь функцию emptyConstruktor и меняю пароль!
// // Это должно быть объявленно
// // выеш в коде, иначе не будет работать

// emptyConstruktor.changePassword('she_will_loved_suck_my_black_cock');
// console.log(emptyConstruktor);

// // 1. У каждого объекта есть свойства proto
// // 2. В этом свойстве лежит ссылка на его рпототип, тоесть на другой объект
// // 3. При создании литералал объекта   "email: 'lusy@mail.com',
// // password: 'lovesukmybigblackcock'', в свойства созадётся ссылка на функцию,

// const Serves = function (name = 'Manager', sale = 0) {
//     this.name = name;
//     this.sale = sale;

//     this.sell = function (product) {
//         this.sales += 1;
//         return `Manager ${this.name} suck ${product}.`;
//     };
// };

// const will = new Serves('lusy', 10);
// console.log(will.sell('cock'));

// const alena = new Serves();

// const Bus = function (people, payment) {
//     this.people = people;
//     this.payment = payment;
// };

// Bus.prototype.showPayment = function () {
//     console.log(`my name is ${this.people}, i payed ${this.payment}`);
// };

// const schoolbus = new Bus('wick', 6);
// const someKids = new Bus('jackson', 35);

// schoolbus.showPayment();
// someKids.showPayment();

// const object1 = {};

// Object.defineProperty(object1, 'property1', {
//     value: 42,
//     writable: false,
// });

// object1.property1 = 77;
// // throws an error in strict mode

// console.log(object1.property1);
// // expected output: 42

