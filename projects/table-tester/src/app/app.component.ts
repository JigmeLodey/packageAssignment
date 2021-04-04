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
      filterable: [{display: 'Male', val: 'male'}, {display: 'Female', val: 'female'}, {display: 'Other', val: 'other'}],
      searchable: true
    },
    {
      field: 'role',
      header: 'Role',
      filterable: [{display: 'Admin', val: 'admin'}, {display: 'Member', val: 'member'}, {display: 'Guest', val: 'guest'}]
    },
    {field: 'age', header: 'Age', sortable: true}
  ];
  data = [
    {id: 1, name: 'Lodey', email: 'lodey@mr.com', gender: 'female', age: 10, role: 'admin'},
    {id: 2, name: 'Pema', email: 'pema@mr.com', gender: 'male', age: 12, role: 'guest'},
    {id: 3, name: 'Karma', email: 'karma@mr.com', gender: 'male', age: 25, role: 'admin'},
    {id: 4, name: 'Jigme', email: 'jigme@mr.com', gender: 'female', age: 13, role: 'guest'},
    {id: 5, name: 'Sonam', email: 'sonam@mr.com', gender: 'male', age: 14, role: 'admin'},
    {id: 6, name: 'Karma', email: 'karma1@mr.com', gender: 'other', age: 17, role: 'guest'},
    {id: 7, name: 'Lodey', email: 'lodey0@mr.com', gender: 'male', age: 19, role: 'member'},
    {id: 8, name: 'Tashi', email: 'tashi@mr.com', gender: 'female', age: 16, role: 'admin'},
    {id: 9, name: 'Dorji', email: 'dorji@mr.com', gender: 'male', age: 45, role: 'member'}
  ];


}
