function Aluno(notaAv1, notaAv2, notaAv3){
	this.av1 = notaAv1;
	this.av2 = notaAv2;
	this.av3 = notaAv3;
	this.nomeCompleto = "";
	this.mediaAv1Av2 = function(av1, av2){
		av1 = (av1 < 4) ? 0 : av1; 
		av2 = (av2 < 4) ? 0 : av2;
		media = (av1 + av2)/2;
		if((media) >= 4){
			if(media >= 6){
					document.write("Média: " + media + "Aprovado");
			} else {
					document.write("Média: " + media + "Fazer AV3");
			} else {
				document.write("reprovado");
		}
	}
}
}
var aluno = new Aluno();
	
	aluno.av1 = 4;
	aluno.av2 = 6;
	aluno.nomeCompleto ="Emanoel";
	aluno.obs = "Aluno de pcsw"; //Atributo exclusivo.
	aluno.mediaAv1Av2(aluno.av1, aluno.av2);
	
