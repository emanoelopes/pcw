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
            var rssentries = xmldata.getElementsByTagName("pergunta")
            var output = '<table class="table table-striped table-bordered">'
                            output+= '<th>Enunciado</th>'
                            output+= '<th>Resposta</th>'
                            for (var i=0; i < rssentries.length; i++){

                               xmlenunciado = rssentries[i].getElementsByTagName('enunciado')[0].firstChild.nodeValue;
                               xmlresposta = rssentries[i].getElementsByTagName('resposta')[0].firstChild.nodeValue;

                               var regex = new RegExp("^.*"+t+".*","gi");
                               xmltudo = xmlenunciado + xmlresposta;
                               res = xmltudo.match(regex);

                               if(res && t!=""){
                                  output+='<tr>'
                                  output+= '<td>' + xmlenunciado + '</td>'
                                  output+= '<td>' + xmlresposta + '</td>'
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

            mygetrequest.open("GET", "xml/questoesgsi.xml", true)
            mygetrequest.send(null)
        }
