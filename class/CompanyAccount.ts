import { PolessiAccount } from "./PolessiAccount"

export class CompanyAccount extends PolessiAccount {

    constructor(name:string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (loanAmount: number): void => {
        if (this.checkStatus()) {
            if (loanAmount > 0) {
                this.setBalance(this.getBalance() + loanAmount);
                console.log(`Você pegou um empréstimo de ${loanAmount}. Novo Saldo: ${this.getBalance()}`);
            } else {
                console.log('Valor de empréstimo inválido.');
            }
        } else {
            console.log('Conta inválida. Não é possível fazer empréstimo.');
        }
    }

}