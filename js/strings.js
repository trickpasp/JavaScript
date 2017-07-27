// declarando variável
var texto = "";
// recebendo um texto do tipo string
texto = "Para você guardei o amor que nunca pude dá"; // conta o númeoro de caracteres

//Strigs literais
var a, b, c, d, e, f, g, h, i, j, l, k;

a = \0; // 0 corresponde NUL (\u0000)
b = \b; // Retrocesso (\u0008)
c = \t; // tabulação horizontal (\u0009)
d = \n; // Nova linha (\u000A)
e = \v; // Tabulação vertical (\u000B)
f = \f; // Avanço de página (\u000C)
g = \r; // Retorno de carro (\u000D)
h = \"; // Aspas duplas (\u0022)
i = \'; // Aspas simples (\u0027)
j = \\; // barra invertida (\u005C)
l = \x XX // O caractere Latin-1 especificado pelos dois digitos hexadecimais XX
k = \u XXXX //  O caractere Latin-1 especificado pelos quatro digitos hexadecimais XXXX

// Trabalhando com strings
var m, o, p, q, r, s;

m = "hello, world";
m.charAt(0); // O primeiro caractere
m.charAt(m.length - 1); // O último caractere
m.substring(1,4); // O 2º, 3º e 4º caractere
m.slice(1,4); // a mesma coisa do substring
m.slice(-3); // os últimos três caracteres
m.indexOf("l"); // posição da primeira letra l
m.lastIndexOf("l"); // posição da última letra l
s.indexOf("l",3); // posição do primeiro l em ou após o 3
s.split(", "); // divide em substring
s.replace("h","H"); // substitui todas as instâncias
s.toUpperCase(); // deixa maiúscula
s.toLowerCase(); // deixa minuscula


// Comparando padrões com RegExp()

var t = "testando: 1, 2, 3";
var padrao = /\d+/g // corresponde a todas as instâncias de um ou mais digitos
padrao.test(t); // verifica se existe uma corrrespondência
t.search(t); // posição da primeira correspondência
t.match(t); // array com todas as correspondẽncia
t.replace(padrao, "#"); // substitui todas as instâncias por #
t.split(/\D+/); // divide em não digito
