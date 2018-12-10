class App {
    static run() {
        let msg = 'Введите № задачи для выполнения:'
            + '\n0 - выход'
            + '\n1 - Реализовать класс Автомобить, который реализует паттерн "Одиночка".'
        ;
        exit0:while (true) {
            let taskN = +prompt(msg, '1');
            console.log('-----' + taskN + '-----')
            switch (taskN) {
                case 0 :
                    break exit0;
                case 1 :
                    doTask1();
                    break;
                default:
                    break;
            }
            alert('Выполнено. Результат в консоли.')
            console.log('-----END-----')
        }

        /**
         * Задача 1. Реализовать класс Автомобить, который реализует паттерн "Одиночка".
         * 1. Создаем два объекта класса "Car" (на самом деле получаем две ссылки на один внутренний объект).
         * 2. Модифицируем данные обоих автомобилей
         * 3. Выводим в консоль информацию о автомобилях.
         *  Удеждаемся, что оба объекта содержат одинаковую информацию.
         */
        function doTask1() {
            let cars = {
                first : Task1.CarSingleton.getInstance(),
                second : Task1.CarSingleton.getInstance()
            };
            cars.first.brand = "Brand1";
            cars.second.model = "Model2";
            console.log(cars);
            console.log('first === second ? ', cars.first === cars.second);

        }
    }
}