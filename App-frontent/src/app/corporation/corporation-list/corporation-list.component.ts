import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporation-list',
  templateUrl: './corporation-list.component.html',
  styleUrls: ['./corporation-list.component.css']
})
export class CorporationListComponent implements OnInit {

  constructor() { }

  corporations = [
    {name: "أنجاز", date: "2020-10-18", photo: "zaid"},
    {name: "أنجاز", date: "2020-10-18", photo: "zaid"},
    {name: "أنجاز", date: "2020-10-18", photo: "zaid"},
    {name: "أنجاز", date: "2020-10-18", photo: "zaid"},
    {name: "أنجاز", date: "2020-10-18", photo: "zaid"},
    {name: "أنجاز", date: "2020-10-18", photo: "zaid"},
    {name: "أنجاز", date: "2020-10-18", photo: "zaid"},
    {name: "أنجاز", date: "2020-10-18", photo: "zaid"},
  ]
   
  ngOnInit() {
  }

}
