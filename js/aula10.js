/*
	FUNÇÕES DA AULA 08
*/

function concatenarNome(){
	pnome = document.getElementById('pnome').value;
	snome = document.getElementById('snome').value;
	
	nomeCompleto = pnome + " " + snome;
	
	img = document.getElementById('foto');
	img.src = 'http://emanoel.pro.br/avatar_128x128.png';
	img.alt = nomeCompleto;
	
	document.getElementById('resultado1').innerHTML = nomeCompleto;
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