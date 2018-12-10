var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App = /** @class */ (function () {
    function App() {
    }
    App.run = function () {
        var msg = 'Введите № задачи для выполнения:'
            + '\n0 - выход'
            + '\n1 - Реализовать класс Автомобить, который реализует паттерн "Одиночка".';
        exit0: while (true) {
            var taskN = +prompt(msg, '1');
            console.log('-----' + taskN + '-----');
            switch (taskN) {
                case 0:
                    break exit0;
                case 1:
                    doTask1();
                    break;
                default:
                    break;
            }
            alert('Выполнено. Результат в консоли.');
            console.log('-----END-----');
        }
        /**
         * Задача 1. Реализовать класс Автомобить, который реализует паттерн "Одиночка".
         * 1. Создаем два объекта класса "Car" (на самом деле получаем две ссылки на один внутренний объект).
         * 2. Модифицируем данные обоих автомобилей
         * 3. Выводим в консоль информацию о автомобилях.
         *  Удеждаемся, что оба объекта содержат одинаковую информацию.
         */
        function doTask1() {
            var cars = {
                first: Task1.CarSingleton.getInstance(),
                second: Task1.CarSingleton.getInstance()
            };
            cars.first.brand = "Brand1";
            cars.second.model = "Model2";
            console.log(cars);
            console.log('first === second ? ', cars.first === cars.second);
        }
    };
    return App;
}());
var Task1;
(function (Task1) {
    /**
     * Класс "автомобиль", обїект которого потом завернем в "CarSingleton".
     */
    var Car = /** @class */ (function () {
        function Car() {
        }
        return Car;
    }());
    /**
     * Класс-одиночка.
     * Предоставляет интерфейс досткпа к единственному єкземпляру класса "Car".
     */
    var CarSingleton = /** @class */ (function (_super) {
        __extends(CarSingleton, _super);
        function CarSingleton() {
            return _super.call(this) || this;
        }
        ;
        /**
         * ------------------------------------------------------------------
         * ! Виктор, если Вы увидели этот текст просьба маякнуть в Viber.   !
         * ! Это покажет, что Вы действительно проверяете домашние задания. !
         * ------------------------------------------------------------------
         */
        CarSingleton.getInstance = function () {
            if (!this.instance) {
                this.instance = new CarSingleton();
            }
            return this.instance;
        };
        return CarSingleton;
    }(Car));
    Task1.CarSingleton = CarSingleton;
})(Task1 || (Task1 = {}));
