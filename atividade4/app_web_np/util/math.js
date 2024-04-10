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

module.exports = {
    verificarNumeroPrimo
}