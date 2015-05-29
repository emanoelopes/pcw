function ajaxRequest(){
   var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
   if (window.ActiveXObject){
      for (var i=0; i < activexmodes.length; i++){
         try{
            return new ActiveXObject(activexmodes[i])
        }
        catch(e){
            //mensagem de erro
          }
        }
      }
      else if (window.XMLHttpRequest)
        return new XMLHttpRequest()
      else
        return false
    }


    function funcBusca(t){

      var mygetrequest = new ajaxRequest()
      if (mygetrequest.overrideMimeType)
        mygetrequest.overrideMimeType('text/xml')

      mygetrequest.onreadystatechange = function(){
        if (mygetrequest.readyState==4){

          if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){
            var xmldata = mygetrequest.responseXML
            var rssentries = xmldata.getElementsByTagName("usuario")
            var output='<table class="table table-striped table-bordered">'
            output+= '<th>Matricula</th>'
                            output+= '<th>Nome</th>'
                            output+= '<th>Curso</th>'
                            output+= '<th>Entrada</th>'
                            output+= '<th>Saída</th>'
                            for (var i=0; i < rssentries.length; i++){

                               xmlnome = rssentries[i].getElementsByTagName('nome')[0].firstChild.nodeValue;
                               xmlmatricula = rssentries[i].getElementsByTagName('matricula')[0].firstChild.nodeValue;
                               xmlcurso = rssentries[i].getElementsByTagName('curso')[0].firstChild.nodeValue;
                               xmlentrada = rssentries[i].getElementsByTagName('entrada')[0].firstChild.nodeValue;
                               xmlsaida = rssentries[i].getElementsByTagName('saida')[0].firstChild.nodeValue;


                               var regex = new RegExp("^.*"+t+".*","gi");
                               xmltudo = xmlmatricula + xmlnome + xmlcurso;
                               res = xmltudo.match(regex);

                               if(res && t!=""){
                                  output+='<tr>'
                                  output+= '<td>' + xmlmatricula + '</td>'
                                  output+= '<td>' + xmlnome + '</td>'
                                  output+= '<td>' + xmlcurso + '</td>'
                                  output+= '<td>' + xmlentrada + '</td>'
                                  output+= '<td>' + xmlsaida + '</td>'
                                  output+='</tr>'
                              }

                          }
                          output+='</table>'
                          document.getElementById("resultado").innerHTML = output
                      }else{
                        alert("Um erro ocorreu durante a requisição")
                    }
                }
            }

            mygetrequest.open("GET", "usuarios.xml", true)
            mygetrequest.send(null)
        }
