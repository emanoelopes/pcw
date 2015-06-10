function validaForm(){
	var er_nome = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/; // er -> expressão regular
	var nome = form1.nome;

	var er_email = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;
	var email = form1.email;

	var er_telefone = /^\(?[0-9]{2}\)?[\s-]?[\d]{4,5}[\s-]?[\d]{4}/;
	var telefone = form1.telefone;

	if(!er_nome.test(nome.value)){
		alert("Atenção\rPreencha o campo nome");
		nome.focus();
		return false;
	}


	if(!er_telefone.test(telefone.value)){
		alert("Atenção\rPreencha o campo telefone");
		telefone.focus();
		return false;
	}

	return true;
}
