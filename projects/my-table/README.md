# MyTable

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Code scaffolding

Run `ng generate component component-name --project my-table` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project my-table`.
> Note: Don't forget to add `--project my-table` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build my-table` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build my-table`, go to the dist folder `cd dist/my-table` and run `npm publish`.

## Running unit tests

Run `ng test my-table` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

############################################################################################################
Description: 

This is angular table package made by using angular material. This table package contains of sorting, 
pagination, filtering, and searching.  




Useage:

1. To install this package : npm i lodey-table

2. import this package to you app.module

3. In your html file use <lib-my-table [dataSource]="your data" [headerName]="your cols header names" [options]="[5,10,15]>
    options= [5,10,15]: this is for your pagination pagesize option which you can give any random value.
    
4. In your component.ts file you just have to send pass table data and cols heading names which you can do in this way:

  colHeader = [
        
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
  ]
  data = [
  
    {id: 1, name: 'something', email: 'something@gmail.com', age: 20, role: 'admin', gender: 'male' },
    {id: 2, name: 'something2', email: 'something2@gmail.com', age: 22, role: 'admin', gender: 'male'},
    
  ]   
  
  above data can be pass from backend and you can link it just like normal way of linking.
  
  
############################################################################################################
you can see my git repo for more info.
##########################################################################################################
