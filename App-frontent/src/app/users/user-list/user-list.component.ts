import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  users = [
    {
      id : 1,
      name: "زيد قاسم عبد اليمه " ,
      email: "zaid qassim12@gmail.com",
      phone: "078210271000",
      dateAdded: "2020 / 10 / 19"
    },
    {
      id : 1,
      name: "زيد قاسم عبد اليمه " ,
      email: "zaid qassim12@gmail.com",
      phone: "078210271000",
      dateAdded: "2020 / 10 / 19"
    },
    {
      id : 1,
      name: "زيد قاسم عبد اليمه " ,
      email: "zaid qassim12@gmail.com",
      phone: "078210271000",
      dateAdded: "2020 / 10 / 19"
    },
    {
      id : 1,
      name: "زيد قاسم عبد اليمه " ,
      email: "zaid qassim12@gmail.com",
      phone: "078210271000",
      dateAdded: "2020 / 10 / 19"
    },
    {
      id : 1,
      name: "زيد قاسم عبد اليمه " ,
      email: "zaid qassim12@gmail.com",
      phone: "078210271000",
      dateAdded: "2020 / 10 / 19"
    },
  ]

  ngOnInit() {
  }

}
