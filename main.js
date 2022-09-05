(function(){

    let score = 0;
    // Создаем функцию конструктор, которая наполняется данными: вопрос, варинант ответа, правильный ответ
    function Question (question, answers, corrrect) {
        this.question = question;
        this.answers = answers;
        this.corrrect = corrrect;
    }

    // Описываем метод displayQuestion который выводит вопрос и ответы
    // Записываем его в прототип класса Queestion чтобы все объекты имели к нему доступ
    Question.prototype.displayQuestion = function(){
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++){
            console.log(i + ". " + this.answers[i]);
        }
    }

    // Метод для проверки корректности ответа
    Question.prototype.checkAnswer = function (answer){

        if(answer == this.corrrect){
            score = score + 1;
            if (score == 1){
                console.log(`%c Это правильный ответ! У вас ${score} очко`, "background: green; color: black;")
            } else if (score >= 2 && score <= 4){
                console.log(`%c Это правильный ответ! У вас ${score} очка`, "background: green; color: black")
            } else {
                console.log(`%c Это правильный ответ! У вас ${score} очков`, "background: green; color: black")
            }
        } else {
            score = score - 1;
            if (score == -1){
                console.log(`%c Не верный ответ! У вас ${score} очко`, "background: red; color: white")
            } else if (score <= 2 && score >= -4){
                console.log(`%c Не верный ответ! У вас ${score} очка`, "background: red; color: white")
            } else {
                console.log(`%c Не верный ответ! У вас ${score} очков`, "background: red; color: white")
            }
        }
    }

    // Создаем вопросы при помощи конструктора
    const quest1 = new Question(
        "Что из нижеуказанного не относится к примитивам?",
        ["NaN", "Null", "Boolean", "String"],
        0
    )

    const quest2 = new Question(
        "Как правильно написать IF конструкцию, чтобы выполнялся некоторый код, когда i не равно 5?",
        ["if (i  5)", "if i  5", "if i =! 5 then", "if (i != 5)"],
        3
    )

    const quest3 = new Question(
        "Какой метод удаляет последний элемент массива?",
        [".push()", ".pop()", ".shift()", ".unshift()"],
        1
    )

    const quest4 = new Question(
        "Укажите имя функции округления вверх?",
        ["ceil", "ceil()", "Math.ceil", "math.ceil()"],
        1
    )

    // Помещаем все вопросы в массив
    let questions = [quest1, quest2, quest3, quest4];

    // После вывода ответа запускаем новый вопрос
    function nextQuestion(){
        // Выбираем один случайный вопрос
        // Находим случайное число
        let n = Math.floor(Math.random() * questions.length);

        // Распечатываем в консоль случайный вопрос с вариантами ответа
        questions[n].displayQuestion();

        // Запрашиваем ответ от пользователя
        let answer = prompt("Введите верный ответ:");

        // Проверяем корректность ответа с помощью ранее описанного метода
        questions[n].checkAnswer(answer);

        //предусмтариваем вариант остановки игры
        if (answer !== "exit" && answer !== null){
            nextQuestion();
        }
    }
    nextQuestion();


})();


