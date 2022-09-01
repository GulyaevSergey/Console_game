// Создаем функцию конструктор, которая наполняется данными: вопрос, варинант ответа, правильный ответ

function Question (question, answers, corrrect) {
    this.question = question;
    this.answers = answers;
    this.corrrect = corrrect;
}

// Создаем вопросы при помощи конструктора

const quest1 = new Question(
    "Что из нижеуказанного не относится к примитивам?"
    ["NaN", "Null", "Boolean", "String"],
    0
)

const quest2 = new Question(
    "Как правильно написать IF конструкцию, чтобы выполнялся некоторый код, когда i не равно 5?"
    ["if (i  5)", "if i  5", "if i =! 5 then", "if (i != 5)"],
    3
)

const quest3 = new Question(
    "Какой метод удаляет последний элемент массива?"
    [".push()", ".pop()", ".shift()", ".unshift()"],
    1
)

const quest4 = new Question(
    "Укажите имя функции округления вверх?"
    ["ceil", "ceil()", "Math.ceil", "math.ceil()"],
    1
)