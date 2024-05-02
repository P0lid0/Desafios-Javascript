let numeroSorteado = Math.floor(Math.random() * 10) + 1;
        let chancesRestantes = 3;

        function verificarPalpite() {
            // Obtém o palpite do usuário
            let palpite = parseInt(document.getElementById("palpite").value);

            // Verifica se o palpite é válido
            if (!isNaN(palpite)) {
                // Verifica se o palpite está correto
                if (palpite === numeroSorteado) {
                    document.getElementById("resultado").innerHTML = "Parabéns! Você acertou o número!";
                } else {
                    chancesRestantes--;
                    if (chancesRestantes > 0) {
                        document.getElementById("resultado").innerHTML = `Você errou. Tente novamente. Você ainda tem ${chancesRestantes} chances.`;
                    } else {
                        document.getElementById("resultado").innerHTML = `Você perdeu. O número sorteado era ${numeroSorteado}.`;
                        document.getElementById("palpite").disabled = true; // Desabilita o campo de entrada após o término das chances
                    }
                }
            } else {
                document.getElementById("resultado").innerHTML = "Por favor, digite um número válido.";
            }
        }