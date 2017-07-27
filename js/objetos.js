// Criando objetos em JavaScript
//Criando objetos literais
var vazio = {}; // objeto sem propriedade
var ponto = {x:0, y:0}; // Duas propriedades
var ponto2 = {x:ponto.x, y:ponto.y}; // valores complexos
var livro = {
  "meu titulo": "JavaScript", // os nomes de propriedade incluem espaços,
  "sub-tituilo": "Deus me guia", // e hifens; portanto, usam strings literais
  "para": "todos que querem aprender",
  autor: { // o valor dessa propriedade é
    nome: "Patrick", // ele próprio um objeto. Note que
    sobrenome: "Silva" //esses nomes de propriedade não têm aspas.
  }
};
// criando objetos com new
var o = new Object(); // cria um objeto vazio
var a = new Array(); // cria um array vazio
var d = new Date(); // cria um objeto date representando a hora atual
var r = new RegExp("js"); // cria um objeto RegExp para comparação de padrões

// Object.create()

var o1 = Object.create({x:1, y:2}); // o1 herda as propriedades x e y

// criando um novo objeto que herda um protótipo

function herdar(p){
  if(p == null) throw TypeError();
  if(Object.create)
    return Object.create(p);
  var t = typeof p;

  if (t !== "object" && t !== "function") throw TypeError();
  function f() {};
  f.prototype = p;
  return new f();
}
