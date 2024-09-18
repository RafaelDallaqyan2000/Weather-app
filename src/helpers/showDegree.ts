export function showDegree(fahrenheit: number | string, isFahrenheight: boolean) {
    const celsius = (+fahrenheit - 32) * 5 / 9;
    return isFahrenheight ? `${Math.round(+fahrenheit)} F` : `${Math.round(celsius)} C`;
}