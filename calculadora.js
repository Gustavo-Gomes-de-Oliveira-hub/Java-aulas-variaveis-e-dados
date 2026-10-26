alert("Vamos testar algumas contas de matemática");

let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite só mais um número: "));

let adicao = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

alert(`O resultado de ${numero1} + ${numero2} é ${adicao} \n 
    o de ${numero1} - ${numero2} é ${subtracao} \n 
    o de de ${numero1} X ${numero2} é ${multiplicacao} \n
    o de ${numero1} / ${numero2} é ${divisao}`);