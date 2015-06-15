var hora_inicial_cidade;

        function setHoraIncial(ano, mes, dia, hora, minuto, segundo)
        {
                hora_inicial_cidade = new Date(ano, mes, dia, hora , minuto,
segundo);
        }

// Na data acima, somamos 2 segs ao horario enviado pelo servidor
porque
// ha um certo atraso entre o momento em que o servidor "gera" a data e
o momento
// em que o javascript e executado; "adiantando" o relogio 2 segundos,
esse erro
// e minimizado (mas nao eliminado, pois nao da pra determinar o erro
com precisao).
var contagemID = null;
var contagemAtivada = false;
var diferenca = 0;
var acerta = 0;

// Array relacionando o numero do mes ao nome
mes_port = new Object();
       mes_port[0] ="JAN";      mes_port[1] ="FEV";      mes_port[2]
="MAR";     mes_port[3] ="ABR";
       mes_port[4] ="MAI";      mes_port[5] ="JUN";      mes_port[6]
="JUL";     mes_port[7] ="AGO";
       mes_port[8] ="SET";      mes_port[9] ="OUT";      mes_port[10]
="NOV";    mes_port[11] ="DEZ";


        // Vamos usar sempre o ano com 4 digitos; como ha diferencas entre
        // o explorer e o navigator, precisa desta funcaozinha.
        function getFullYear(obj_data) {
                var ano = obj_data.getYear();
                if (ano < 1000) ano += 1900;
                return ano;
        }


        // Calculemos a diferenca entre o horario enviado pelo servidor e o
horario da
        // maquina cliente; com esse numero, podemos recalcular a cada segundo
o horario
        // correto da cidade independente do horario da maquina cliente.
        function iniciaconta(){
                  hora_inicial_local=new Date;
                  diferenca =(hora_inicial_cidade.getTime() -
hora_inicial_local.getTime());
                  return diferenca;
        }

        function mostrarTempo(acerta){

                // Pega a hora local atual:
                var agora = new Date();
                // Acerta de acordo com a diferenca calculada antes:
                agora.setTime(agora.getTime() + acerta);
                // Divide em ano, mes, dia etc.
                var ano = getFullYear(agora);
                var mes = mes_port[agora.getMonth()];
                var dia = agora.getDate();

                var data_cidade=((dia < 10) ? "0" : "") + dia +"/" +mes+"/" +
ano + " - ";

                var hora = agora.getHours();
                var minuto = agora.getMinutes();
                var segundo = agora.getSeconds();

                var hora_cidade = ((hora < 10) ? "0"+hora : hora);
                hora_cidade += ((minuto < 10) ? ":0" : ":") + minuto;
                hora_cidade += ((segundo < 10) ? ":0" : ":") + segundo;

                // Lanca a data correta na pagina HTML.
                form1.data.value = data_cidade + hora_cidade;

                // Atualiza a cada segundo.
                contagemID = setTimeout("mostrarTempo (acerta)",1000);

                contagemAtivada = true;
        }

        function iniciar_relogio() {
                acerta=iniciaconta();
                mostrarTempo(acerta);
        }
