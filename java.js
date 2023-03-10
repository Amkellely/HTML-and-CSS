/*Задание 2
Рассчитайте, сколько дней, часов, минут и секунд
осталось до Нового года. Выведите эти значения красиво, используя метод document.write() с тегами <p> и
<span> и классами для них. Стили можно записать в отдельном css-файле. Если одно из чисел будет меньше 10,
то его нужно вывести с ведущим 9.
Сделайте свой скрипт универсальным, задав дату следующего Нового года относительно текущей даты с помощью методов объекта Date.
*/

// Задаем дату Нового года
var newYear = new Date(new Date().getFullYear() + 1, 0, 1);

// Разница в миллисекундах между сегодняшней датой и Новым годом
var diff = newYear - new Date();

// Переводим разницу в дни, часы, минуты и секунды
var days = Math.floor(diff / (1000 * 60 * 60 * 24));
var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
var minutes = Math.floor((diff / 1000 / 60) % 60);
var seconds = Math.floor((diff / 1000) % 60);

// Выводим результат на экран
document.write('<p>До Нового года осталось:</p>');
document.write('<p><span class="number">' + (days < 10 ? '0' : '') + days + '</span> дней <span class="number">' + (hours < 10 ? '0' : '') + hours + '</span> часов <span class="number">' + (minutes < 10 ? '0' : '') + minutes + '</span> минут <span class="number">' + (seconds < 10 ? '0' : '') + seconds + '</span> секунд</p>');
