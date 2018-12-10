namespace Task1 {
    /**
     * Класс "автомобиль", обїект которого потом завернем в "CarSingleton".
     */
    class Car {
        brand : string;
        model: string;
    }

    /**
     * Класс-одиночка.
     * Предоставляет интерфейс досткпа к единственному єкземпляру класса "Car".
     */
    export class CarSingleton extends Car{
        private static instance : CarSingleton;
        private constructor(){
            super();
        };

        /**
         * ------------------------------------------------------------------
         * ! Виктор, если Вы увидели этот текст просьба маякнуть в Viber.   !
         * ! Это покажет, что Вы действительно проверяете домашние задания. !
         * ------------------------------------------------------------------
         */
        static getInstance(){
            if(!this.instance){
                this.instance = new CarSingleton();
            }
            return this.instance;
        }
    }
}