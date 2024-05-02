function iniciarContagemRegressiva() {
    // Obtém o elemento de entrada
    let inputNumero = document.getElementById("numero");
    // Obtém o valor do número do usuário
    let numero = parseInt(inputNumero.value);

    // Verifica se o número é válido
    if (numero > 0) {
        // Inicia a contagem regressiva
        let resultado = "";
        for (let i = numero; i >= 1; i--) {
            resultado = resultado + (i + "<br>");
        }
        // Exibe o resultado na div com id "resultado"
        document.getElementById("resultado").innerHTML = resultado;
    } else {
        // Exibe uma mensagem de erro se o número for inválido
        document.getElementById("resultado").innerHTML = "Número inválido. Por favor, digite um número inteiro positivo.";
    }
}
       
        

