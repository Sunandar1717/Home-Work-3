const Convert = require("./rubah");


test("celcius ke farenheit", () => {
    const hitung = new Convert();
    expect(hitung.fromCelcius('farenheit', 2)).toBe(35.6);
});

test("farenheit ke reamur", () => {
    const hitung = new Convert();
    expect(hitung.fromFarenheit('reamur', 2)).toBe(-13.333333333333332);
});

test("remur ke celcius", () => {
    const hitung = new Convert();
    expect(hitung.fromReamur('celcius', 2)).toBe(2.5);
});