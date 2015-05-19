/*
	FUNÇÕES DA AULA 08
*/

function concatenar(){
	pnome = meuForm1.elements['pnome'].value;
	snome = meuForm1.elements['snome'].value;
	alert('Seu nome é: ' + pnome + ' ' +  snome);
}

function calcularIdade(){
	nasc = parseInt(meuForm2.elements['nasc'].value);
	atual = new Date();
	hoje = atual.getFullYear();
	idade = hoje - nasc;
	alert("Sua idade é " + idade);
	
}

function calcularIMC(){
	peso = parseFloat(meuForm3.elements['peso'].value);
	altura = parseFloat(meuForm3.elements['altura'].value);
	imc = peso/(altura*altura);
	if(imc <= 17){
		alert("Você está magro porque seu imc é " + imc);
	}else if(imc > 17 && imc <= 30){
		alert("Você está normal porque seu imc é " + imc);
	}else{
		alert("Você está obeso porque seu imc é " +imc);
	}
	
}

function validaForm(){
	concatenar();
	calcularIdade();
	calcularIMC();
	
}