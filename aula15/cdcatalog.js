// Função anônima que será executada apenas a página carregada
            window.onload = function(){
                //displayResult()
            }
            // Função que decide qual objeto XMLHTTPRequest será usado
            function loadXMLDoc(cdcatalog.xml){
				var objetoAjax = false;
                if (window.XMLHttpRequest){
                    // Requisição XML com o protocolo HTTP para transferência de arquivos
                    objetoAjax=new XMLHttpRequest();
                }else {
                    // Caso o infeliz esteja usando o IE5 ou IE6 - Coitado!
                    objetoAjax=new ActiveXObject("Microsoft.XMLHTTP");
                }
                // O método open destina-se a informar ao servidor o edereço
                // do arquivo que está sendo requisitado pelo navegador.
                objetoAjax.open("GET",cdcatalog.xml,false);

                // O método send destina-se a iniciar a requisição
                // que já tenha sido definida pelo método open
                objetoAjax.send(null);

                return objetoAjax.responseXML;
            }

            function displayResult(arq){
                xml=loadXMLDoc("cdcatalog.xml");
                if(arq){
                    xsl=loadXMLDoc(arq);
                }else{
                    xsl=loadXMLDoc("cdcatalog.xml");    
                }
                // // Caso o infeliz esteja usando o IE5 ou IE6 - Coitado!
                if (window.ActiveXObject){
                    ex=xml.transformNode(xsl);
                    document.getElementById("meuscds").innerHTML=ex;
                }
                // Para os melhores navegadores.
                else if (document.implementation && document.implementation.createDocument)
                {
                    // Transforma o node para uma string aplicando o stylesheet
                    // dado pelo método XSLTProcessor::importStylesheet
                    xsltProcessor=new XSLTProcessor();
                    xsltProcessor.importStylesheet(xsl);

                    // transformToFragment Retornará um nó DocumentFragment DOM
                    // dois argumentos: o documento de origem para ser transformado
                    //  e do objeto de documento que será o dono do fragmento
                    resultDocument = xsltProcessor.transformToFragment(xml,document);

                    mydiv = document.getElementById("meuscds");
                    while (mydiv.firstChild) {
                        mydiv.removeChild(mydiv.firstChild);
                    }

                    document.getElementById("meuscds").appendChild(resultDocument);
                }
            }
