// Matriz original
const matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const linhas = matriz.length;
const colunas = matriz[0].length;

const matriz_transposta = [];

// Iterar sobre as colunas da matriz original
for (let j = 0; j < colunas; j++) {
    matriz_transposta[j] = [];
    for (let i = 0; i < linhas; i++) {
        matriz_transposta[j][i] = matriz[i][j];
    }
}

// Imprimir a matriz transposta
for (let i = 0; i < matriz_transposta.length; i++) {
    console.log(matriz_transposta[i].join(" "));
}