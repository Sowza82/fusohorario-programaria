function calcularFusos() {
    // Obter o valor da hora digitada pelo usuário
    const inputTime = document.getElementById('inputTime').value;

    // Verificar se o formato da hora está correto (HH:mm)
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!regex.test(inputTime)) {
        alert('Por favor, insira a hora no formato HH:mm.');
        return;
    }

    // Convertando a hora
    const brasil = converterParaFusoHorario(inputTime, 10);
    const argentina = converterParaFusoHorario(inputTime, -1);
    const estadosUnidos = converterParaFusoHorario(inputTime, -5);
    const japao = converterParaFusoHorario(inputTime, 9);

    // Exibir os resultados na página
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Brasil: ${brasil}<p>
        <p>Argentina: ${argentina}</p>
        <p>Estados Unidos: ${estadosUnidos}</p>
        <p>Japão: ${japao}</p>
    `;
}

function converterParaFusoHorario(hora, diferenca) {
    // Converter a string da hora para um objeto Date
    const data = new Date(`2000-01-01T${hora}:00.000Z`);

    // Adicionar a diferença do fuso horário
    data.setHours(data.getHours() + diferenca);

    // Formatar a hora para HH:mm
    const horaFormatada = data.toISOString().substr(11, 5);

    return horaFormatada;
}
