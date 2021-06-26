document.getElementById('btn').onclick = function() {

  let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

  if (year == 2015) {
    alert( "Правильно!" );
    alert( "Вы такой умный!" );
  } else {
    alert ("Неверно, подумайте еще!");
  }
  alert (typeof year);
}

document.getElementById('btn1').onclick = function() {
  let a = prompt('Угадай число от 0 до 5');

  switch (a) {
    case '0':
      alert( 'Совсем маловато' );
      break;
    case '1':
      alert( 'Мало, но ты близок к успеху' );
      break;
    case '2':
      alert( 'Совсем тепло' );
      break;
    case '3':
      alert( 'Очень жарко!' );
      break;
    case '4':
      alert( 'В точку!' );
      break;
    case '5':
      alert( 'Перебор!' );
      break;
    default:
      alert( 'Неизвестное значение' );
  }
}

document.getElementById('while').onclick = function() {
  function i() {
    i = 1;
    while (i <= 40) {
      console.log(i);
      i++;
    }
  }
  i();
}
document.getElementById('for').onclick = function() {
  function f() {
    for (let f = 1; f <= 40; f++) {
      console.log(f);
    }
  }
  f();
}
document.getElementById('dowhile').onclick = function() {
  function g() {
    g = 1;
    do {
      console.log(g);
      g++;
    } while (g < 41);
  }
  g();
}

document.getElementById('btn4').onclick = function() {

   let num = prompt('Введите число большее 100!', 101);

    while (num <= 100 && num != null) {
      num = prompt('Введите еще раз!', 101);
    }

}
document.getElementById('btn5').onclick = function() {
  let b = true
  while (b) {
    let t = prompt("Введите любое число больше 5")
    if (t > 5) {
      alert("Поздравляю! Вы справились!")
      b = false
    }
  }
}
document.getElementById('btn6').onclick = function() {
  for (let i = 8; i <= 20; i++) {
    if (i % 2 == 0) {
      alert(i);
    }
  }
}
document.getElementById('bt1').onclick = function() {
  let arr = new Array("Клубника " + "Персик " + "Апельсин " + "Виноград " + "Банан");
  console.log(arr);
  let arr1 = ["Картошка " + "Перец " + "Помидор " + "Капуста " + "Баклажан"];
  console.log(arr1);
}
document.getElementById('bt2').onclick = function() {
  let Vegetables = [" Картошка", " Перец", " Помидор", " Капуста", " Баклажан"];
  alert(Vegetables);
  Vegetables[4] = ' Морковь';
  alert(Vegetables);
}

document.getElementById('bt3').onmouseover = function() {
  let arr4 = new Array(1, 2, 3, 4, 5, 6, 7, 8);
  function Over() {
    alert("Длина массива: " + arr4.length)
  }
  Over();
}

document.getElementById('bt6').onclick = function() {
  let arr4 = new Array(1, 2, 3, 4, 5, 6, 17, 128);
  let arr2 = new Array(201, 202, 208, 205, 262, 222)
  let ResultArr = arr4.concat(arr2)

  let t = ResultArr[ResultArr.length - 1]
  delete ResultArr[ResultArr.length-1]
  alert(t)
}

document.getElementById('bt7').onclick = function() {
let arr4 = new Array(1, 2, 3, 4, 5, 6, 17, 128)
let arr2 = new Array(201, 202, 208, 205, 262, 222)
let ResultArr = arr4.concat(arr2)

let t = ResultArr[ResultArr.length - 1]
delete ResultArr[ResultArr.length - 1]
alert(t)
t = ResultArr[ResultArr.length - 2]
delete ResultArr[ResultArr.length - 2]
alert(t)
}

document.getElementById('bt8').onclick = function() {
let arr4 = new Array(1, 2, 3, 4, 5, 6, 17, 128);
let arr2 = new Array(201, 202, 208, 205, 262, 222)
let ResultArr = arr4.concat(arr2)
ResultArr.unshift(245)
alert(ResultArr)
}

document.getElementById('bt9').onclick = function() {
let Data = new Date();
let day = Data.getDate();
let mount = Data.getMonth();
alert(day + "." + mount + "." + Data.getFullYear())
}

document.getElementById('bt10').onclick = function() {
  let Data = new Date();

  let mount = Data.getMonth();
  let m
  switch (mount) {
    case 1:
      m = "Января"
      break
    case 2:
      m = "Февраля"
      break
    case 3:
      m = "Марта"
      break
    case 4:
      m = "Апреля"
      break
    case 5:
      m = "Мая"
      break
    case 6:
      m = "Июня"
      break
    case 7:
      m = "Июля"
      break
    case 8:
      m = "Августа"
      break
    case 9:
      m = "Сентября"
      break
    case 10:
      m = "Октября"
      break
    case 11:
      m = "Ноября"
      break
    case 12:
      m = "Дeкабря"
      break
  }

  alert(Data.getDate() + " " + m + " " + Data.getFullYear())

}

document.getElementById('bt11').onclick = function() {
  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  function sumRandom(one, two) {
    t = one + two
    return t
  }

  a = getRandom(51)
  b = getRandom(51)
  alert(a + " + " + b + " = " + sumRandom(a, b));
}
