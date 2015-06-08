var agora, anoCorrente, diaD, diferenca, um_dia, diasFaltando

agora = new Date();
anoCorrente = agora.getFullYear();
diaD = new Date(anoCorrente, 01, 03);
diferenca = diaD.getTime() - agora.getTime();
um_dia = 24 * 60 * 60 * 1000 // 24 h * 60m * 60s * 1000milesegundos

function diasfaltando(){
  if (diferenca > 0){
    diasFaltando = Math.ceil(diferenca / um_dia);
    document.writeln('Faltam ' + diasFaltando + ' dias para o dia D.');
  } else if (diferenca < 0 && diferenca > um_dia) {
    document.writeln('Hoje é o dia D');
  } else {
    diaD = new Date(anoCorrente + 1, 01, 03);
    diferenca = diaD.getTime() - agora.getTime();
    diasFaltando = Math.ceil(diferenca / um_dia);
    document.writeln('Faltam ' + diasFaltando + ' dias para o dia D.');
  }
}
