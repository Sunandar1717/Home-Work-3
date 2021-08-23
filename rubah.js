class Convert {
    constructor() {
        console.log("i'm the new object");
    }
    fromCelcius(to, num1) {
        if (to == "celcius") {
            return num1;
        }
        if (to == "reamur") {
            return (4 / 5) * num1;
        }
        if (to == "farenheit") {
            return (9 / 5) * num1 + 32;
        }
    }

    fromFarenheit(to, num1) {
        if (to == "farenheit") {
            return num1;
        }
        if (to == "celcius") {
            return (5 / 9) * (num1 - 32);
        }
        if (to == "reamur") {
            return (4 / 9) * (num1 - 32);
        }
    }
    fromReamur(to, num1) {
        if (to == "reamur") {
            return num1;
        }
        if (to == "celcius") {
            return (5 / 4) * num1;
        }
        if (to == "farenheit") {
            return (9 / 4) * num1 + 32;
        }
    }
}

module.exports = Convert;