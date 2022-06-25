// Crie um array que receba 5 itens e exiba no console.
let comidas = [
    "bolo", "torta", "coxinha", "pizza", "sanduiche"
];
console.log(`Array que recebe 5 itens: ${comidas}`);

// Utilize um método para adicionar um nome ao inicio do array.
comidas.unshift("salada");
console.log(`Adicionando um item no início: ${comidas}`);

// Utilize um método para remover o último nome do array.
comidas.pop();
console.log(`Removendo o último item: ${comidas}`);

// Utilize um método para adicionar dois nomes ao fim do array.
comidas.push("cuscuz", "pão de queijo");
console.log(`Adicionando dois itens no fim: ${comidas}`);

// Utilize um método para remover o primeiro nome do array.
comidas.shift();
console.log(`Removendo o primeiro item: ${comidas}`);


// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4];
console.log(`Array original: ${numbers}`);
numbers.sort((a,b) => a-b);
console.log(`Array com números em ordem crescente: ${numbers}`);