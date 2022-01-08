/*
Є 2 об'єкти - users, products
У файлі home4.html є 2 елементи select (id="users-select", id="products-select")
Завдання - написати загальну бізнес логіку, яка у вищевказаних елементах select
буде виводити згруповані options

В елементі select id="users-select" - згруповані department користувачів
В елементі select id="products-select" - згруповані title продуктів

Тобто треба робити наступні кроки
- з масиву об'єктів отримати масив властивостей,
  наприклад масив, що містить всі віки
- з масиву віку отримати масив їх унікальних значень
- сортування отриманого масиву
- створення масиву з елементами options
- виведення у select

Завдання реалізувати за допомогою pipe

Клієнтський код повинен мати можливість перевизначати
властивість об'єктів users, яке потрібно групувати
         name, age або depratment
та виводити в елемент select
!!! При цьому бізнес-логіка не повинна змінюватись
*/

/*  =============== Data =============  */

let users = [
  { id: 1, name: "John", age: "20", department: "HR" },
  { id: 2, name: "Sasha", age: "30", department: "Marketing" },
  { id: 3, name: "Bill", age: "40", department: "Finance" },
  { id: 4, name: "Ashley", age: "20", department: "IT" },
  { id: 5, name: "Rachel", age: "40", department: "IT" },
  { id: 6, name: "Tom", age: "30", department: "HR" },
  { id: 7, name: "Steve", age: "30", department: "Marketing" },
  { id: 8, name: "Jim", age: "40", department: "IT" },
  { id: 9, name: "Willy", age: "20", department: "Finance" },
];

const products = [
  { id: 1, title: "Panasonic", price: 50 },
  { id: 2, title: "Samsung", price: 34 },
  { id: 3, title: "Grundic", price: 40 },
  { id: 4, title: "Electrolux", price: 34 },
  { id: 4, title: "Samsung", price: 50 },
  { id: 4, title: "Panasonic", price: 40 },
];

// prettier-ignore
const curry = (fn) => (...args) => fn.bind(null, ...args)

// prettier-ignore
const pipe =  (...fns) =>  (x) =>  fns.reduce((v, f) => f(v), x);

/*  Business logic */
const getProp = (prop) => {};
const groupedItems = () => {};
const sortBy = () => {};
const getOpts = () => {};

/* =========== client code ===============  */
const usersSelect = document.getElementById("users-select");

//  Usage:
// getProps може приймати department, age, name, price, title

/*
const userFn = pipe(getProp("department"), groupedItems, sortBy, getOpts);
const productFn = pipe(getProp("price"), groupedItems, sortBy, getOpts);

const usersOpts = userFn(users);
const productsOpts = productFn(products);

usersSelect.innerHTML = usersOpts.join("");
productsSelect.innerHTML = productsOpts.join("");
 */
