import { Component  } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private accountService: AccountService){
    this.accountService.statusUpdateEvent.subscribe(
      (status: string) => alert('Status change to : '+ status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
  
}
