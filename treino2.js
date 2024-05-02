function iniciardivisao() {
    // Obtém o valor digitado pelo usuário
    let numero = parseInt(document.getElementById("numero").value);

    // Verifica se o valor é um número válido
    if (!isNaN(numero)) {
        let divisores = [];

        // Encontra todos os divisores do número
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                divisores.push(i);
            }
        }

        // Exibe os divisores na página
        document.getElementById("resultado").innerHTML = "Números pelos quais " + numero + " é divisível: " + divisores.join(", ");
    } else {
        // Exibe uma mensagem de erro se o valor não for um número válido
        document.getElementById("resultado").innerHTML = "Por favor, digite um número válido.";
    }
}
   