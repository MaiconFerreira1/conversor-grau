// Função que vai convertor graus entre Celsius e Fahrenheit

const conversaoTemperatura = () => {
    var valorTemperatura = document.getElementById('graus').value;
    var tipoTemperatura = document.querySelector('input[name="graus"]:checked').value; 
    var resultadoConversao = document.getElementById('resultadoConversao');
    
    if (tipoTemperatura == 'celsius' && valorTemperatura !== '') {
        let conversao = valorTemperatura * 9 / 5 + 32;
        resultadoConversao.innerHTML = 
        `${valorTemperatura}° graus <strong>Celsius</strong> é igual á ${conversao.toFixed(1)}° graus <strong>Fahrenheit</strong>`;
    } else if (tipoTemperatura == 'fahrenheit' && valorTemperatura !== ''){
        let conversao = ((valorTemperatura - 32) * 5)/9;
        resultadoConversao.innerHTML = 
        `${valorTemperatura}° graus <strong>Fahrenheit</strong> é igual á ${conversao.toFixed(1)}° graus <strong>Celsius</strong>`;
    } else {
        alert('Digite um número!')
    }
}





