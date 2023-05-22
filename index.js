import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Matheus", 11122233309);
const cliente2 = new Cliente("Ana Julia", 88833377708);
const contaCorrenteMatheus = new ContaCorrente(1001, cliente1);
contaCorrenteMatheus.depositar(750);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteMatheus.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);