import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  departmentLists = [
    {name: "قسم التطوير ", date: "2020-10-18", photo: "zaid"},
    {name: "قسم التطوير ", date: "2020-10-18", photo: "zaid"},
    {name: "قسم التطوير ", date: "2020-10-18", photo: "zaid"},
    {name: "قسم التطوير ", date: "2020-10-18", photo: "zaid"},
    {name: "قسم التطوير ", date: "2020-10-18", photo: "zaid"},
  ]

  ngOnInit() {
  }

}
