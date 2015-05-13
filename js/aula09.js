//Saída padrão JavaScript no HTML

document.write('<p>Com aspas simples<p><br>');
document.write("<h2>Com aspas duplas</h2><br>");
document.writeln('<pre>Quebra de linha...</pre>');
document.writeln('cadê a quebra?');

function escreveData(){
	var objData = new Date();
	document.write(objData.toLocaleString() + '<hr/>');
	diaDaSemana = objData.day;
};

escreveData();
switch(diaDaSemana){
	case 0:
		document.write('Domingo<br>');
		break;
	case 1:
		document.write('Segunda<br>');
		break;
	case 2:
		document.write('Terça');
		break;
	case 3:
		document.wirte('quarta');
		break;
	case 4:
		document.write('quinta');
		break;
	case 5: 
		document.write('quinta');
		break;
	default:
		document.write('Não é um dia da semana!');
}
