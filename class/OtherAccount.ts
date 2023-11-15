import { PolessiAccount } from './PolessiAccount';

export class OtherAccount extends PolessiAccount {
    doc_id: number;

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber);
        this.doc_id = doc_id;
    }

    deposit = (amount: number): void => {
        if (this.checkStatus()) {
            if (amount > 0) {
                this.setBalance(this.getBalance() + amount + 10);
                console.log(`Você Depositou ${amount}. Novo Saldo (incluindo 10): ${this.getBalance()}`);
            } else {
                console.log('Não houve depósito. Valor inválido.');
            }
        }
    }
}