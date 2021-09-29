export function mytoCelsius(celsius) {
    return (celsius * 9) / 5 + 32;
}
export function mytoFahrenheit(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
export function myconvertto(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
