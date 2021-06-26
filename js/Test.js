const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{
  constructor(type, questions, results)
  {
    //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
    this.type = type;

    //Массив с вопросами
    this.questions = questions;

    //Массив с возможными результатами
    this.results = results;

    //Количество набранных очков
    this.score = 0;

    //Номер результата из массива
    this.result = 0;

    //Номер текущего вопроса
    this.current = 0;
  }

  Click(index)
  {
    //Добавляем очки
    let value = this.questions[this.current].Click(index);
    this.score += value;

    let correct = -1;

    //Если было добавлено хотя одно очко, то считаем, что ответ верный
    if(value >= 1)
    {
      correct = index;
    }
    else
    {
      //Иначе ищем, какой ответ может быть правильным
      for(let i = 0; i < this.questions[this.current].answers.length; i++)
      {
        if(this.questions[this.current].answers[i].value >= 1)
        {
          correct = i;
          break;
        }
      }
    }

    this.Next();

    return correct;
  }

  //Переход к следующему вопросу
  Next()
  {
    this.current++;

    if(this.current >= this.questions.length)
    {
      this.End();
    }
  }

  //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
  End()
  {
    for(let i = 0; i < this.results.length; i++)
    {
      if(this.results[i].Check(this.score))
      {
        this.result = i;
      }
    }
  }
}

//Класс, представляющий вопрос
class Question
{
  constructor(text, answers)
  {
    this.text = text;
    this.answers = answers;
  }

  Click(index)
  {
    return this.answers[index].value;
  }
}

//Класс, представляющий ответ
class Answer
{
  constructor(text, value)
  {
    this.text = text;
    this.value = value;
  }
}

//Класс, представляющий результат
class Result
{
  constructor(text, value)
  {
    this.text = text;
    this.value = value;
  }

  //Этот метод проверяет, достаточно ли очков набрал пользователь
  Check(value)
  {
    if(this.value <= value)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}

//Массив с результатами
const results =
  [
    new Result("Вам многому нужно научиться", 0),
    new Result("Вы уже неплохо разбираетесь", 2),
    new Result("Ваш уровень выше среднего", 4),
    new Result("Вы в совершенстве знаете тему", 6)
  ];

//Массив с вопросами
const questions =
  [
    new Question("Как правильно написать начало while цикла?",
      [
        new Answer("while i = 1 to 10", 0),
        new Answer("while (i <= 10)", 1),
        new Answer("while (i <= 10; i++)", 0),
        new Answer("while (i from 1 to 10)", 0)
      ]),

    new Question("Как правильно написать IF конструкцию, чтобы выполнялся некоторый код, когда i не равно 5.",
      [
        new Answer("if (i  5)", 0),
        new Answer("if i  5 ", 0),
        new Answer("if i =! 5 then", 0),
        new Answer("if (i != 5)", 1)
      ]),

    new Question("Каким методом можно получить данные, введенные пользователем?",
      [
        new Answer("confirm()", 0),
        new Answer("alert()", 0),
        new Answer("prompt()", 1),
        new Answer("message()", 0)
      ]),

    new Question("Какой из указанных методов добавляет элемент в конец массива?",
      [
        new Answer(".push()", 1),
        new Answer(".pop()", 0),
        new Answer(".shift()", 0),
        new Answer(".unshift()", 0)
      ]),

    new Question("Является ли элемент «else» обязательным в конструкции условия?",
      [
        new Answer("Да", 0),
        new Answer("Нет", 1),
        new Answer("Зависит от версии JavaScript", 0),
        new Answer("В разных браузерах по-разному", 0)
      ]),

    new Question("Что из нижеуказанного не относится к примитивам?",
      [
        new Answer("NaN", 1),
        new Answer("Null", 0),
        new Answer("Boolean", 0),
        new Answer("String", 0)
      ]),

    new Question("Укажите имя функции округления вверх.",
      [
        new Answer("ceil", 0),
        new Answer("math.ceil", 0),
        new Answer("Math.ceil", 1),
        new Answer("math.ceil()", 0),
        new Answer("ceil()", 0)
      ]),

    new Question("Как правильно написать if условие в JavaScript?",
      [
        new Answer("if i = 5", 0),
        new Answer("if (i == 5)", 1),
        new Answer("if i = 5 then", 0),
        new Answer("if i == 5 then", 0)
      ]),

    new Question("Что выведет следующий фрагмент кода ?\n" +
      "console.log(new Number(1) === 1);",
      [
        new Answer("false", 1),
        new Answer("true", 0),
        new Answer("undefined", 0),
        new Answer("null", 0)
      ]),

    new Question("С каких из указанных знаков не может начинаться название переменной?",
      [
        new Answer("$", 0),
        new Answer("A", 0),
        new Answer("a", 0),
        new Answer("_", 0),
        new Answer("2", 1)
      ]),
  ];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update()
{
  //Проверяем, есть ли ещё вопросы
  if(quiz.current < quiz.questions.length)
  {
    //Если есть, меняем вопрос в заголовке
    headElem.innerHTML = quiz.questions[quiz.current].text;

    //Удаляем старые варианты ответов
    buttonsElem.innerHTML = "";

    //Создаём кнопки для новых вариантов ответов
    for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
    {
      let btn = document.createElement("button");
      btn.className = "button";

      btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

      btn.setAttribute("index", i);

      buttonsElem.appendChild(btn);
    }

    //Выводим номер текущего вопроса
    pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

    //Вызываем функцию, которая прикрепит события к новым кнопкам
    Init();
  }
  else
  {
    //Если это конец, то выводим результат
    buttonsElem.innerHTML = "";
    headElem.innerHTML = quiz.results[quiz.result].text;
    pagesElem.innerHTML = "Очки: " + quiz.score;
  }
}

function Init()
{
  //Находим все кнопки
  let btns = document.getElementsByClassName("button");

  for(let i = 0; i < btns.length; i++)
  {
    //Прикрепляем событие для каждой отдельной кнопки
    //При нажатии на кнопку будет вызываться функция Click()
    btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
  }
}

function Click(index)
{
  //Получаем номер правильного ответа
  let correct = quiz.Click(index);

  //Находим все кнопки
  let btns = document.getElementsByClassName("button");

  //Делаем кнопки серыми
  for(let i = 0; i < btns.length; i++)
  {
    btns[i].className = "button button_passive";
  }

  //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
  if(quiz.type == 1)
  {
    if(correct >= 0)
    {
      btns[correct].className = "button button_correct";
    }

    if(index != correct)
    {
      btns[index].className = "button button_wrong";
    }
  }
  else
  {
    //Иначе просто подсвечиваем зелёным ответ пользователя
    btns[index].className = "button button_correct";
  }

  //Ждём секунду и обновляем тест
  setTimeout(Update, 1000);
}
