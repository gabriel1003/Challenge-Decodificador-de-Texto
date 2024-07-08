
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Bem-vindo ao encriptador e desencriptador de palavras!');
    exibirTextoNaTela('p', "Digite a palavra que deseja criptografar ou, descriptografar. OBS: evite palavras com acento e maiuscula.");
}

exibirMensagemInicial();

function incriptar() {
    let incriptarPalavra = document.querySelector('input').value;
    let palavraEncriptada = "";

    for (let i = 0; i < incriptarPalavra.length; i++) {
        let letra = incriptarPalavra[i];
        if (letra === 'a') {
            palavraEncriptada += 'ai';
        } else if (letra === 'e') {
            palavraEncriptada += 'enter';
        } else if (letra === 'i') {
            palavraEncriptada += 'imes';
        } else if (letra === 'o') {
            palavraEncriptada += 'ober';
        } else if (letra === 'u') {
            palavraEncriptada += 'ufat';
        } else {
            palavraEncriptada += letra;
        }
    }

    exibirTextoNaTela('p', `Esta é a sua palavra incriptada: ${palavraEncriptada}`);

    //Limpa o campo de entrada
    limparCampoEntrada();

}

//função para limpar o campo aonde esta a palavra escrita.
function limparCampoEntrada() {

    document.querySelector('input').value = '';
}

//Função para desencriptografar la palavra.
function desencriptar() {
    let descriptografarPalavra = document.querySelector('input').value;
    let palavraDescriptografada = "";
    let i = 0;

    while (i < descriptografarPalavra.length) {
        let letra = descriptografarPalavra[i];

        if (descriptografarPalavra.substring(i, i + 2) === 'ai') {
            palavraDescriptografada += 'a';
            i += 2; // Avança o índice para 'ai'
        } else if (descriptografarPalavra.substring(i, i + 4) === 'ober') {
            palavraDescriptografada += 'o';
            i += 4; // Avança o índice para 'ober'
        } else if (descriptografarPalavra.substring(i, i + 4) === 'imes') {
            palavraDescriptografada += 'i';
            i += 4; // Avança o índice para 'imes'
        } else if (descriptografarPalavra.substring(i, i + 5) === 'enter') {
            palavraDescriptografada += 'e';
            i += 5; // Avança o índice para 'enter'
        } else if (descriptografarPalavra.substring(i, i + 4) === 'ufat') {
            palavraDescriptografada += 'u';
            i += 4; // Avança o índice para 'ufat'
        } else {
            palavraDescriptografada += letra;
            i += 1; // Avança o índice para a próxima letra
        }
    }

    exibirTextoNaTela('p', `Aqui está a sua palavra descriptografada: ${palavraDescriptografada}`);

    // Limpa o campo de entrada
    limparCampoEntrada();
}

// Função para copiar a palavra para a área de transferência
function copiarPalavra() {
    // Seleciona o parágrafo que contém a palavra a ser copiada
    let palavraParaCopiar = document.querySelector('p');

    // Cria um campo de texto temporário e coloca a palavra nele
    let tempInput = document.createElement("textarea");
    tempInput.value = palavraParaCopiar.textContent;

    // Adiciona o campo de texto ao corpo do documento
    document.body.appendChild(tempInput);

    // Seleciona e copia o conteúdo do campo de texto temporário
    tempInput.select();
    document.execCommand("copy");

    // Remove o campo de texto temporário do corpo do documento
    document.body.removeChild(tempInput);

    // Exibe uma mensagem de sucesso (opcional)
    alert("Palavra copiada para a área de transferência!");
}
