function showDate(){
    const data = new Date();
    const dia = data.getDate();
    const diaNome = checkDia(data.getDay())
    const nomeMes = checkMes(data.getMonth()+1)
    const ano = data.getFullYear();
    const hora = addZeroEsquerda(data.getHours());
    const minuto = addZeroEsquerda(data.getMinutes());
    titulo.innerHTML = `${diaNome}, ${dia} de ${nomeMes} ${ano}, ${hora}:${minuto}`
}

function checkDia(num){
    let diaNome;
    switch (num){
        case 0:
            diaNome = 'Domingo';
            break;
        case 1:
            diaNome = 'Segunda-feira';
            break;
        case 2:
            diaNome = 'Terça-feira';
            break;
        case 3:
            diaNome = 'Quarta-feira';
            break;
        case 4:
            diaNome = 'Quinta-feira';
            break;
        case 5:
            diaNome = 'Sexta-feira';
            break;
        case 6:
            diaNome = 'Sábado';
            break;
        default:
            diaNome = ''
    }
    return diaNome;
}

function checkMes(num){
    let nomeMes
    switch (num){
        case 1:
            nomeMes = 'Janeiro';
            break;
        case 2:
            nomeMes = 'Fevereiro';
            break;
        case 3:
            nomeMes = 'Março';
            break;
        case 4:
            nomeMes = 'Abril';
            break;
        case 5:
            nomeMes = 'Maio';
            break;
        case 6:
            nomeMes = 'Junho';
            break;
        case 7:
            nomeMes = 'Julho';
            break;
        case 8:
            nomeMes = 'Agosto';
            break;
        case 9:
            nomeMes = 'Setembro';
            break;
        case 10:
            nomeMes = 'Outubro';
            break;
        case 11:
            nomeMes = 'Novembro';
            break;
        case 12:
            nomeMes = 'Dezembro';
            break;
        default:
            nomeMes = ''    
}
    return nomeMes;
}

function addZeroEsquerda(num){
    return num < 10 ? `0${num}` : `${num}`
}