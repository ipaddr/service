import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts = [
    { name: 'Master Account', status: 'active'},
    { name: 'Testaccount', status: 'inactive'},
    { name: 'Hidden Account', status: 'unknown'}
  ];

  statusUpdateEvent = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status})
    this.loggingService.logStatusChange(status);
  }

  updateStatus(position: number, status: string){
    this.accounts[position].status = status;
    this.loggingService.logStatusChange(status);
  }
}
