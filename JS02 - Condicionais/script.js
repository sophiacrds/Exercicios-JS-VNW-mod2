//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
    let idade = +prompt("Qual sua idade?");

    if(idade > 18){
        console.log("Você é maior de idade!");
    }else{
        console.log("Você é menor de idade");
    }


//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
    let condHumana = prompt("Por acaso, você é humano?");

    if(condHumana == "sim" || condHumana == "Sim"){
        condHumana = true;
    }else{
        condHumana = false;
    }

    if(idade > 18 && condHumana){
        console.log("Parabéns, você é humano e maior de idade!");
    }else{
        console.log("Bem, ou você é menor de idade ou é um alienígena...")
    }

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
    let mesAniv = prompt("Em que mês você nasceu? (favor utilizar primeira letra maiúscula para facilitar nosso sistema");

    if(mesAniv === "Janeiro" || mesAniv === "Dezembro"){
        console.log("Você nasceu no verão!")
    }else{
        console.log("Existe uma boa chance de você não ser nem do signo de Sagitário, nem de Capricórnio.")
    }

//*************** BÔNUS
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
    let nome = prompt("Qual seu nome?");

    if(nome[0] === "R" || nome[0] === "r"){
        console.log("Seu nome começa com a letra 'R'!");
    } else{
        console.log("Seu nome não começa coma letra 'R'!");
    }


//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
    let sobreNome = prompt("Qual seu sobrenome?")

    if(sobreNome.length > 6 || sobreNome[0] === "E" || sobreNome[0] === "e"){
        console.log("Seu sobrenome possui mais de 6 letras ou começa com a letra 'E'!")
    }else{
        console.log("Ou seu sobrenome possui menos de 6 letras ou não começa com a letra 'E'!")
    }