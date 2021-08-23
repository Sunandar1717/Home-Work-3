$(document).ready(function () {
    let interval = setInterval(function () {
        let momentNow = moment();
        $("#date-part").html(
            momentNow.format("YYYY MMMM DD") +
            " " +
            momentNow.format("dddd").substring(0, 3).toUpperCase()
        );
        $("#time-part").html(momentNow.format("A hh:mm:ss"));
    }, 100);
});

function validate(evt) {
    let theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === "paste") {
        key = event.clipboardData.getData("text/plain");
    } else {
        // Handle key press
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    let regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function select() {
    document.getElementById("num1").value = "";
    document.getElementById("result").value = "";
}

const convert = new Convert();

function conv() {
    if (document.getElementById("from").value == "celcius") {
        const res = convert.fromCelcius(
            document.getElementById("to").value,
            parseInt(document.getElementById("num1").value)
        );
        document.getElementById("result").value = res;
    }
    if (document.getElementById("from").value == "reamur") {
        const res = convert.fromReamur(
            document.getElementById("to").value,
            parseInt(document.getElementById("num1").value)
        );
        document.getElementById("result").value = res;
    }
    if (document.getElementById("from").value == "farenheit") {
        const res = convert.fromFarenheit(
            document.getElementById("to").value,
            parseInt(document.getElementById("num1").value)
        );
        document.getElementById("result").value = res;
    }
}

function change() {
    document.body.style.backgroundColor =
        document.getElementById("color").value;
}