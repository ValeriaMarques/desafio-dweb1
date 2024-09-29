function salvar() {
    const nome = document.getElementById('nome').value;
    const apto = document.getElementById('apto').value;
    const bloco = document.getElementById('bloco').value;

    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;

    const vaga = document.getElementById('vaga').value;

    console.log("--Proprietário--"
        + "\nNome: " + nome
        + "\nApto: " + apto
        + "\nBloco: " + bloco
        + "\n--Veículo--"
        + "\nPlaca: " + placa
        + "\nModelo: " + modelo
        + "\nCor: " + cor
        + "\n--Vaga--"
        + "\nVaga: " + vaga
    );

    confirm("Cadastro realizado com sucesso!");

}
