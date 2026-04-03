import { Component, OnInit } from '@angular/core';
import { AccountService } from './service/account.service';
import { User } from '../../../Interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  user$: Observable<User> | undefined;

  constructor(private accountService: AccountService) {
    this.accountService = new AccountService();
  }

  getUser() {
    console.log('getUser method called!');
    this.user$ = this.accountService.getUser();
  }

  ngOnInit(): void {
    this.getUser();
  }
}
