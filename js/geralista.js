//Função que gera uma lista de 10 valores superiores ao digitado incrementado de 2.
function geralista(){
        var b = parseInt(document.getElementById("a").value);
		var c = b + 1;//9
		document.write("<h1>Resultado</h1>");
        document.write("<ul>");
		for(i = 0; i < 10 ; i++ ){
                document.write("<li>" + c +"</li>");
				c = c + 2;
        }
		document.write("</ul>");
}
