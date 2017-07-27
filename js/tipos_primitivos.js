// declarando uma variável
var inteiro, flutuante;
// recebendo um número inteiro
inteiro = 0;
inteiro = 1;
inteiro = 9000;
//recendo um número do tipo fluante
flutuante = 1.2;

//Aritmética com javascript
//-- Algumas operações matemáticas
Math.pow(2, 53); // 2 elevado à pontência de 53
Math.round(.6); // arredonda para o inteiro mais próximo
Math.ceil(.6); // arredonda para cima para um inteiro
Math.floor(.6); // arredonda para baixo para um inteiro
Math.abs(-5); // retorna um valor absoluto
Math.max(1, 0, 10); // retorna o maior argumento
Math.min(1, 0, 10); // retorna o menor argumento
Math.random(); // Número pseudoaleatório x, onde 0 <= x < 1.0
Math.PI // pi, circunferência de um círculo/ diâmetro
Math.E // base logaritma natural
Math.sqrt(3) // raiz quadrada de 3
Math.pow(3, 1 / 3) // A raiz cúbica de 3
Math.sin(0) // Trigonometria: também Math.cos, Math.atan, etc.
Math.log(10) // Logaritmo natural de 10
Math.log(100) / Math.LN10 // Logaritmo de base 10 de 100
Math.log(512) / Math.LN2; // Logaritmo de base 2 de 512
Math.exp(3); // Math.E ao cubo

// variáveis globais Infinity e NaN
var numero = Infinity // Uma variável de leitura/gravação inicinializada como Infinity
numero = Number.POSITIVE_INFINITY; // Valor infinity somente para leitura
numero = 1 / 0; // infinity
numero = Number.MAX_VALUE + 1; // também é avaliado como infinity

numero = Number.NEGATIVE_INFINITY; // valor infinity  negativo
numero = -Infinity; // valor infinity negativo
numero = -1 / 0; // valor infinity negativo também
numero = -Number.MAX_VALUE - 1; // também é avaliado como infinity negativo

numero = NaN; // Uma variável de leitura/gravação inicinializada como NaN
numero = Number.NaN; // Uma propriedade somente para leitura contendo o mesmo valor
numero = 0 / 0; // avaliado como NaN

numero = Number.MIN_VALUE / 2; // Estouro negativo: avaliado como 0
numero = -Number.MIN_VALUE / 2; // Zero absoluto
numero = -1 / Infinity; // também 0 negativo
numero = -0;
