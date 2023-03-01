/* Задание 1.
Создать объект, описывающий автомобиль (производитель,
модель, год выпуска, средняя скорость), и следующие функции
для работы с этим объектом.
1. Функция для вывода на экран информации об автомобиле.
2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.*/

/*
let car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2018,
  avgSpeed: 70,

  info: function() {
    console.log(`Manufacturer: ${this.manufacturer}\nModel: ${this.model}\nYear: ${this.year}\nAvg. speed: ${this.avgSpeed} km/h`);
  },

  timeTravel: function(distance) {
    let time = distance / this.avgSpeed;
    let restTime = Math.floor(time / 4);
    time += restTime;
    console.log(`To travel ${distance} km with an average speed of ${this.avgSpeed} km/h, you will need approximately ${time.toFixed(1)} hours including rest time.`);
  }
};
car.info();
car.timeTravel(500);
*/
/*
Задание 2
Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
1. Функция сложения 2-х объектов-дробей.
2. Функция вычитания 2-х объектов-дробей.
3. Функция умножения 2-х объектов-дробей.
4. Функция деления 2-х объектов-дробей.
5. Функция сокращения объекта-дроби.*/
/*
// объект-дробь
let fraction = {
  numerator: 0, // числитель
  denominator: 1, // знаменатель
};

// функция сложения двух дробей
function add(f1, f2) {
  let result = {
    numerator: f1.numerator * f2.denominator + f2.numerator * f1.denominator,
    denominator: f1.denominator * f2.denominator
  }
  return simplify(result);
}

// функция вычитания двух дробей
function subtract(f1, f2) {
  let result = {
    numerator: f1.numerator * f2.denominator - f2.numerator * f1.denominator,
    denominator: f1.denominator * f2.denominator
  }
  return simplify(result);
}

// функция умножения двух дробей
function multiply(f1, f2) {
  let result = {
    numerator: f1.numerator * f2.numerator,
    denominator: f1.denominator * f2.denominator
  }
  return simplify(result);
}

// функция деления двух дробей
function divide(f1, f2) {
  let result = {
    numerator: f1.numerator * f2.denominator,
    denominator: f1.denominator * f2.numerator
  }
  return simplify(result);
}

// функция сокращения дроби
function simplify(f) {
  let gcd = findGCD(f.numerator, f.denominator);
  return {
    numerator: f.numerator / gcd,
    denominator: f.denominator / gcd
  }
}

// функция для нахождения НОД
function findGCD(a, b) {
  if (b == 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}
let f1 = {
  numerator: 2,
  denominator: 3
};

let f2 = {
  numerator: 3,
  denominator: 4
};

let sum = add(f1, f2); // {numerator: 17, denominator: 12}
let difference = subtract(f1, f2); // {numerator: -1, denominator: 12}
let product = multiply(f1, f2); // {numerator: 1, denominator: 2}
let quotient = divide(f1, f2); // {numerator: 8, denominator: 9}

let simplified = simplify(sum); // {numerator: 17, denominator: 12} => {numerator: 17, denominator: 12}*/
/*
Создать объект на JavaScript, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
1. Функция вывода времени на экран.
2. Функция изменения времени на переданное количество
секунд.
3. Функция изменения времени на переданное количество
минут.
4. Функция изменения времени на переданное количество
часов.
Учтите, что в последних 3-х функциях, при изменении одной
части времени, может измениться и другая. Например: если ко
времени «20:30:45» добавить 30 секунд, то должно получиться
«20:31:15», а не «20:30:75».*/

let Time = {
  hours: 0,
  minutes: 0,
  seconds: 0
};
function printTime(time) {
  console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
}
function addSeconds(time, seconds) {
  let totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds + seconds;
  time.hours = Math.floor(totalSeconds / 3600);
  time.minutes = Math.floor((totalSeconds % 3600) / 60);
  time.seconds = totalSeconds % 60;
}
function addMinutes(time, minutes) {
  addSeconds(time, minutes * 60);
}
function addHours(time, hours) {
  addSeconds(time, hours * 3600);
}
let time = {
  hours: 20,
  minutes: 30,
  seconds: 45
};

printTime(time); // 20:30:45

addSeconds(time, 30);
printTime(time); // 20:31:15

addMinutes(time, 10);
printTime(time); // 20:41:15

addHours(time, 2);
printTime(time); // 22:41:15
