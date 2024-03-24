function verificarNumeroPrimo(n) {
    if (n <= 1) {
        return false; // 0 e 1 não são primos
    }

    // Verifica se n é divisível por algum número entre 2 e a raiz quadrada de n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Se n é divisível, não é primo
        }
    }
    
    // Se nenhum divisor foi encontrado, n é primo
    return true;
}

console.log(verificarNumeroPrimo(0)); //false
console.log(verificarNumeroPrimo(1)); //false
console.log(verificarNumeroPrimo(2)); //true
console.log(verificarNumeroPrimo(3)); //true
console.log(verificarNumeroPrimo(7)); //true
console.log(verificarNumeroPrimo(83)); //true
console.log(verificarNumeroPrimo(100)); //false
console.log(verificarNumeroPrimo(991)); //true
console.log(verificarNumeroPrimo(104729)); //true
console.log(verificarNumeroPrimo(14348907)); //false