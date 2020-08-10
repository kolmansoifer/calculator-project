function celcius(temp) {
  return (temp * (9/5))+32;;
}

const temp = parseInt(prompt("Enter a temperature in celcius: "));
const result = celcius(temp);

alert(result + " fahrenheit");
