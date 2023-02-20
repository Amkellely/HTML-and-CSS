/* while (true) {
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const currentDate = new Date();
  const currentDay = days[currentDate.getDay()];
  const answer = confirm(`${currentDay}. Хотите увидеть следующий день?`);

  if (!answer) {
    break; // выход из цикла, если пользователь нажал "Отмена"
  }
}
*/
/*
for (let i = 2; i <= 9; i++) {
  console.log(`Таблица умножения для ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
*/

/*
let min = 0;
let max = 100;
let guess = Math.floor((min + max) / 2);
let answer = "";

while (answer !== "===") {
  answer = prompt(`Это число ${guess}? Введите ">", "<" или "===", чтобы ответить.`);

  if (answer === ">") {
    min = guess;
  } else if (answer === "<") {
    max = guess;
  } else if (answer === "===") {
    alert(`Ура! Я угадал число ${guess}!`);
    break;
  } else {
    alert("Пожалуйста, введите только '>', '<' или '==='.");
  }

  guess = Math.floor((min + max) / 2);
}
*/