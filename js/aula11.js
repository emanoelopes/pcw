function montarExpressao(n){
		r = document.getElementById('entradaVal');
		valorAnterior = r.value;
		r.value = valorAnterior + n;
}


function executaExpressao(){
	r = document.getElementById('entradaVal');
	resultado = eval(r.value);
	r.value = resultado;
	document.getElementById('resultados').innerHTML = "Histórico";
	document.getElementById('resultados').innerHTML = resultado;
}
