import { OtherAccount } from './class/OtherAccount';
import { PolessiAccount } from './class/PolessiAccount';
import { PeapleAccount } from './class/PeapleAccount';
import { CompanyAccount } from './class/CompanyAccount';

const peapleAccount: PeapleAccount = new PeapleAccount(1, 'Gabriel', 10);
peapleAccount.deposit(100);
peapleAccount.withdraw(50);

const companyAccount: CompanyAccount = new CompanyAccount('PolessiBank', 1);
companyAccount.deposit(100);
companyAccount.getLoan(50);

const otherAccount: OtherAccount = new OtherAccount(1, 'PolessiBank', 1);
otherAccount.deposit(100);
