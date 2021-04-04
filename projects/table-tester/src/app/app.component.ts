import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table-tester';
  displayColumn = [
    {field: 'id', header: 'No', sortable: true},
    {field: 'name', header: 'Name', sortable: true, searchable: true},
    {field: 'email', header: 'Email'},
    {
      field: 'gender',
      header: 'Gender',
      filterable: [{as: 'Male', val: 'male'}, {as: 'Female', val: 'female'}, {as: 'Other', val: 'other'}],
      searchable: true
    },
    {field: 'role', header: 'Role', filterable: [{as: 'Admin', val: 'admin'}, {as: 'Member', val: 'member'}, {as: 'Guest', val: 'guest'}]},
    {field: 'age', header: 'Age', sortable: true}
  ];
  data = [
    {id: 1, name: 'Lodey', email: 'somebody@mr.com', gender: 'male', age: 13, role: 'admin'},
    {id: 2, name: 'Pema', email: 'somebody@mr.com', gender: 'male', age: 12, role: 'guest'},
    {id: 3, name: 'Karma', email: 'somebody@mr.com', gender: 'male', age: 5, role: 'admin'},
    {id: 4, name: 'Lodey', email: 'somebody@mr.com', gender: 'male', age: 13, role: 'guest'},
    {id: 5, name: 'Pema', email: 'somebody@mr.com', gender: 'male', age: 12, role: 'admin'},
    {id: 6, name: 'Karma', email: 'somebody@mr.com', gender: 'male', age: 5, role: 'guest'},
    {id: 7, name: 'Lodey', email: 'somebody@mr.com', gender: 'male', age: 13, role: 'member'},
    {id: 8, name: 'Pema', email: 'somebody@mr.com', gender: 'male', age: 12, role: 'admin'},
    {id: 9, name: 'Karma', email: 'somebody@mr.com', gender: 'male', age: 5, role: 'member'}
  ];


}
