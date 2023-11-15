export abstract class PolessiAccount {
    private name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setBalance = (balance: number): void => {
        this.balance = balance;
        console.log('Saldo Alterado Com Sucesso'); 
    }
    
    getBalance = (): number => {
        return this.balance;
    }

    setName = (name: string): void => {
        this.name = name;
        console.log('Nome Alterado Com Sucesso');
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (amount: number): void => {
        if(this.validateStatus()){
            if(amount > 0){
                this.balance += amount;
                console.log(`Você Depositou ${amount}. Novo Saldo: ${this.balance}`);
            }else{
                console.log('Não houve deposito');
            }
        }
    }

    withdraw = (amount: number): void => {
        if(this.validateStatus()){
            if(amount > 0 && amount <= this.balance){
                this.balance -= amount;
                console.log(`Você sacou ${amount}. Novo Saldo: ${this.balance}`)
            }else{
                console.log(`Você não pode efetuar este saque pois o seu saldo é menor que o valor solicitado. Saldo atual: ${this.balance}`)
            }
        }
    }

    protected checkStatus = (): boolean => {
        return this.validateStatus();
    }

    private validateStatus = (): boolean => {
        if(this.status){
            return this.status;
        }

        throw new Error('Conta inválida');
    }

}