//Aprendendo o básico de manipulação de data e hora
var nesse_tempo = new Date(2010, 0, 1); // 0 1º dia do 1º mês de 2010
var ultimo = new Date(2010, 0, 1, 17, 10, 30); // o mesmo dia com hora local

var agora = new Date(); // data e hora atuais
var decorrido = agora - nesse_tempo; // subtração de data e horas atuais

ultimo.getFullYear();
ultimo.getMonth();
ultimo.getDate();
ultimo.getDay();
ultimo.getHours();
ultimo.getUTCHours(); // depende do fuso horário
ultimo.toString();
ultimo.toUTCString();
ultimo.toLocaleDateString();
ultimo.toLocaleTimeString();
ultimo.toISOString();
