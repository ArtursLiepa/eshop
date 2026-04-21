import { Component, OnInit } from '@angular/core';
import { AccountService } from './service/account.service';
import { User } from '../../../Interfaces/user';
import { Orders } from '../../../Interfaces/orders';
import { Observable } from 'rxjs';
// import {
//   CdkDrag,
//   CdkDragDrop,
//   CdkDropList,
//   moveItemInArray,
// } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  user$: Observable<User> | undefined;

  orders: Orders[] = [
    { product: 'Wireless headphone', orderNo: 1 },
    { product: 'Wireless headphone', orderNo: 2 },
    { product: 'Wireless headphone', orderNo: 3 },
    { product: 'Wireless headphone', orderNo: 4 },
  ];

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
