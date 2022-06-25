// 1 - Criar um loop que conte de 1 até 10 usando FOR
console.log("De 1 a 10 com FOR:");
let i = 1;

for(i = 1; i <= 10; i++){
    console.log(i);
}

// 2 - Criar um loop que conte de 10 até 1 usando WHILE
console.log("De 10 a 1 com WHILE:");
i = 10;

while(i >= 1){
    console.log(i);
    i--;
}

// 3 - Criar um loop que conte todos os números ímpares de 1 até 100
console.log("Ímpares de 1 a 100:");

for(i = 1; i <= 100; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}

// 4- Criar um loop que conte todos os números pares de 0 a 100
console.log("Pares de 0 a 100:")

for(i = 0; i <=100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// Extra
let num = parseInt(prompt("Escolha um número de 1 a 10"));
console.log(`Tabuada do ${num}:`)

for(i = 0; i <= 10; i++){
    console.log(`${num} x ${i} = ${num*i}`);
}

alert("confira no console do seu navegador!");