function Robot(nome, versao){
	this.id = nome; this.version = versao;
	this.falar = function(message){
		if(message == "oi"){
			alert("Olá, meu nome é " + this.id + "e estou na versão " + this.version);
		} else {
			alert("Não reconheço o texto " + message);
		}
	}
}
var robot = new Robot("Robo1",2.0);
robot.falar(prompt("Digite um oi para o robo"));