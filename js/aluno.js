function Aluno(notaAv1, notaAv2, notaAv3){
	this.av1 = notaAv1;
	this.av2 = notaAv2;
	this.av3 = notaAv3;
	this.nomeCompleto = "";
	this.mediaAv1Av2 = function(av1, av2){
		av1 = (av1 < 4) ? 0 : av1; 
		av2 = (av2 < 4) ? 0 : av2;
		media = (av1 + av2)/2;
		if((av1+av2) >= 4){
			if(media >= 6){
					resultado = 'M√dia='+media+" Aprovado";
                    divoculta = document.getElementById('div_oculta');
                    divoculta.style.display = 'none';
                    prompt('Voc√ est√ aprovado. Ainda assim, deseja fazer AV3?');
			} else {
	            divoculta = document.getElementById('div_oculta');
                divoculta.style.display = 'block';
                resultado = 'M√dia= '+media+ ' Precisa fazer AV3';
            }
	}else{
            resultado = "REPROVADO";
            divoculta = document.getElementById('div_oculta');
            divoculta.style.display = 'none';
}
return resultado;
}
};

function verificaAV1eAV2(){
    nomecompleto = document.getElementById('nomecompleto');
    av1 = document.getElementById('av1');
    av2 = document.getElementById('av2');
    resultado1 = document.getElementById('resultado1');
    var emanoel = new Aluno();
    emanoel.nomeCompleto = nomecompleto.value;
    emanoel.av1 = eval(av1.value); 
    emanoel.av2 = eval(av2.value);
    resultado1.innerHTML = emanoel.nomeCompleto + ' - ' + emanoel.mediaAv1Av2(emanoel.av1,emanoel.av2);
}    
